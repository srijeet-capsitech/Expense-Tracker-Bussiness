
using ExpenseTrackerBusiness.Server.Data;
using ExpenseTrackerBusiness.Server.Models;
using ExpenseTrackerBussiness.Server.Services.Implementations;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]

[ApiController]

public class UsersController : ControllerBase

{

    private readonly MongoDBContext _context;

    private readonly RefreshTokenServices _jwtService;

    public UsersController(MongoDBContext context, RefreshTokenServices jwtService)

    {

        _context = context;

        _jwtService = jwtService;

    }

    // Register User    [HttpPost("register")]

    public async Task<IActionResult> Register(User user)

    {

        // Save user to MongoDBawait _context.Users.InsertOneAsync(user);

        // Generate JWT Tokenvar token = _jwtService.GenerateJwtToken(user);

        return Ok(new { token });

    }

    // Login User    [HttpPost("login")]

    public async Task<IActionResult> Login([FromBody] User loginUser)

    {

        var user = await _context.Users.Find(u => u.Email == loginUser.Email && u.Password == loginUser.Password).FirstOrDefaultAsync();

        if (user == null)

        {

            return Unauthorized("Invalid credentials.");

        }

        var token = _jwtService.GenerateJwtToken(user);

        return Ok(new { token });

    }

    // Get All Users    [HttpGet]

    public async Task<IActionResult> GetAllUsers()

    {

        var users = await _context.Users.Find(_ => true).ToListAsync();

        return Ok(users);

    }

    // Update User    [HttpPut("{id}")]

    public async Task<IActionResult> UpdateUser(string id, User updatedUser)

    {

        var result = await _context.Users.ReplaceOneAsync(u => u.Id == id, updatedUser);

        if (result.IsAcknowledged)

        {

            return Ok(updatedUser);

        }

        return NotFound();

    }

    // Delete User    [HttpDelete("{id}")]

    public async Task<IActionResult> DeleteUser(string id)

    {

        var result = await _context.Users.DeleteOneAsync(u => u.Id == id);

        if (result.DeletedCount == 0)

        {

            return NotFound();

        }

        return NoContent();

    }

}
