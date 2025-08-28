//namespace ExpenseTrackerBussiness.Server.Services
//{
//    public class TokenService
//    {
//    }
//}


//using ExpenseTrackerBussiness.Server.Models;
////using ExpenseTrackerBussiness.Server.Models;
//using ExpenseTrackerBussiness.Server.Services.Interfaces;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;

//namespace ExpenseTrackerBussiness.Server.Services
//{
//    public class TokenService : ITokenService
//    {
//        private readonly IConfiguration _config;

//        public TokenService(IConfiguration config)
//        {
//            _config = config;
//        }

//        public string GenerateJwtToken(User user)
//        {
//            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
//            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//            var claims = new[]
//            {
//                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
//                new Claim(ClaimTypes.Name, user.Name),
//                new Claim(ClaimTypes.Email, user.Email),
//                //new Claim(ClaimTypes.Role, user.Role.ToString()) // Handle null role
//            };

//            var token = new JwtSecurityToken(
//                issuer: _config["Jwt:Issuer"],
//                audience: _config["Jwt:Audience"],
//                claims: claims,
//                expires: DateTime.Now.AddMinutes(30),
//                signingCredentials: creds);

//            return new JwtSecurityTokenHandler().WriteToken(token);
//        }

//        public string GenerateRefreshToken()
//        {
//            return Convert.ToBase64String(Guid.NewGuid().ToByteArray());
//        }
//    }
//}




using ExpenseTrackerBussiness.Server.Models;
using ExpenseTrackerBussiness.Server.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ExpenseTrackerBussiness.Server.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;

        public TokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateAccessToken(User user)
        {
            var claims = new[]
            {
                //new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email ?? ""),
                //new Claim("name", user.Name)
                new Claim("name", user.Name ?? "")

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public string GenerateRefreshToken()
        {
            return Guid.NewGuid().ToString();
        }
    }
}
