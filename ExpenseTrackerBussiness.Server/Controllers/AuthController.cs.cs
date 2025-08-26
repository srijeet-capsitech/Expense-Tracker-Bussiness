using ExpenseTrackerBussiness.Server.DTOs.Login;
using ExpenseTrackerBussiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseTrackerBussiness.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupRequest dto)
        {
            try
            {
                var response = await _userService.Signup(dto);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Signin([FromBody] LoginRequest dto)
        {
            try
            {
                var response = await _userService.Login(dto);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex);
            }
        }
    }
}
