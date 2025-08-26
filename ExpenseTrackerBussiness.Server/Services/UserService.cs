//using BCrypt.Net;
//using ExpenseTrackerBusiness.Server.Dto.Signup;
//using ExpenseTrackerBusiness.Server.DTOs.Login;
//using ExpenseTrackerBusiness.Server.DTOs.Signup;
//using ExpenseTrackerBusiness.Server.Models;
//using ExpenseTrackerBusiness.Server.Services.Interfaces;
////using Microsoft.EntityFrameworkCore;
//using Microsoft.IdentityModel.Tokens;
//using MongoDB.Driver;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Security.Cryptography;
//using System.Text;

//namespace ExpenseTrackerBusiness.Server.Services
//{
//    public class UserService : IUserService
//    {
//        private readonly IMongoCollection<User> _users;
//        private readonly IConfiguration _config;

//        public UserService(IConfiguration config)  
//        {
//            _config = config;
//            var client = new MongoClient(_config.GetConnectionString("ConnectionString"));
//            var database = client.GetDatabase("ExpenceTrackerDb");
//            _users = database.GetCollection<User>("Users");
//        }

//        public async Task<SignupResponce> Signup(SignupRequest dto)
//        {
//            var existingUser = await _users.Find(u => u.Email == dto.Email).FirstOrDefaultAsync();
//                if (existingUser != null)
//            {
//                throw new Exception("Email already Exist. ");

//            }
//            var refreshToken = GenerateRefreshToken();   
//            var user = new User
//            {
//                Name = dto.Name,
//                Email = dto.Email,
//                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
//                Phone=dto.Phone,
//                //Role=dto.Role,
//                //DepartmentId=dto.DepartmentId,
//                //OrganisationId=dto.OrganisationId,
//                //EmployeeId = dto.EmployeeId ?? GenerateEmployeeId(),
//                //CreatedBy= dto.CreatedBy ?? "Admin",
//                //UpdatedAt= DataTime.UtcNow,
//                //DeletedBy= 
//                //RefreshToken = null
//                RefreshToken = refreshToken,

//            };

//            await _users.InsertOneAsync(user);

//            var token = GenerateJwtToken(user);

//            //return new SignupResponce
//            //{
//            //    Id = user.Id,
//            //    Name = user.Name,
//            //    Email = user.Email,
//            //    //Token = token,
//            //    Message = "Signup Successful"
//            //};
//            return new SignupResponce
//            {
//                Id = user.Id,
//                Name = user.Name,
//                Email = user.Email,
//                Token = token,
//                //RefreshToken = refreshToken,

//                Message = "Signup successful"
//            };

//        }



//        public async Task<LoginResponce> Login(LoginRequest dto)
//        {
//            var user = await _users.Find(u => u.Email == dto.Email).FirstOrDefaultAsync();
//            if (user == null)
//                throw new Exception("User doesnot Exist");
//            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
//                throw new Exception("invalid creadential");

//            var token = GenerateJwtToken(user);
//            var refreshToken = GenerateRefreshToken();
//            user.RefreshToken = refreshToken;
//            //
//            //user.UpdatedAt = DateTime.UtcNow;
//            //await _users.ReplaceOneAsync(u => u.Id == user.Id, user);

//            return new LoginResponce
//            {
//                Id = user.Id,
//                Name = user.Name,
//                Email = user.Email,
//                Token = token,
//                RefreshToken = refreshToken,
//                Message = "Login successful"
//            };
//        }

//        private string GenerateJwtToken(User user)   // alag service mai banega 
//        {
//            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
//            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//            var claims = new[]
//            {
//                new Claim(ClaimTypes.NameIdentifier, user.Id),
//                new Claim(ClaimTypes.Email, user.Email),
//                new Claim(ClaimTypes.Role, user.Role)
//            };

//            var token = new JwtSecurityToken(
//                issuer: _config["Jwt:Issuer"],
//                audience: _config["Jwt:Audience"],

//                claims: claims,
//                expires: DateTime.Now.AddMinutes(30),  // Access token expiry
//                signingCredentials: creds);

//            return new JwtSecurityTokenHandler().WriteToken(token);
//        }

//        private string GenerateRefreshToken()   // alag service mai banega 
//        {
//            return Convert.ToBase64String(Guid.NewGuid().ToByteArray());
//        }
//    }
//}




using ExpenseTrackerBusiness.Server.Dto.Signup;
using ExpenseTrackerBusiness.Server.DTOs.Login;
using ExpenseTrackerBusiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.Models;
using ExpenseTrackerBussiness.Server.Services.Interfaces;
using MongoDB.Driver;

namespace ExpenseTrackerBussiness.Server.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;
        private readonly IConfiguration _config;
        private readonly ITokenService _tokenService; // Inject TokenService

        public UserService(IConfiguration config, ITokenService tokenService)
        {
            _config = config;
            _tokenService = tokenService;
            var client = new MongoClient(_config.GetConnectionString("ConnectionString"));
            var database = client.GetDatabase("ExpenceTrackerDb");
            _users = database.GetCollection<User>("Users");
        }

        public async Task<SignupResponce> Signup(SignupRequest dto)
        {
            var existingUser = await _users.Find(u => u.Email == dto.Email).FirstOrDefaultAsync();
            if (existingUser != null)
                throw new Exception("Email already exists.");

            var refreshToken = _tokenService.GenerateRefreshToken();
            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Phone = dto.Phone,
                RefreshToken = refreshToken
            };

            await _users.InsertOneAsync(user);
            var token = _tokenService.GenerateJwtToken(user);

            return new SignupResponce
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Token = token,
                Message = "Signup successful"
            };
        }

        public async Task<LoginResponce> Login(LoginRequest dto)
        {
            var user = await _users.Find(u => u.Email == dto.Email).FirstOrDefaultAsync();
            if (user == null)
                throw new Exception("User does not exist.");
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
                throw new Exception("Invalid credentials.");

            var token = _tokenService.GenerateJwtToken(user);
            var refreshToken = _tokenService.GenerateRefreshToken();
            user.RefreshToken = refreshToken;
            await _users.ReplaceOneAsync(u => u.Id == user.Id, user);

            return new LoginResponce
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Token = token,
                RefreshToken = refreshToken,
                Message = "Login successful"
            };
        }
    }
}