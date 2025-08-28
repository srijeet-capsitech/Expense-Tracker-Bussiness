////using ExpenseTrackerBusiness.Server.DTOs.Login;
////using ExpenseTrackerBusiness.Server.DTOs.Signup;
//using ExpenseTrackerBussiness.Server.DTOs.Login;
//using ExpenseTrackerBussiness.Server.DTOs.Signup;
//using ExpenseTrackerBussiness.Server.Services.Interfaces;
//using Microsoft.AspNetCore.Mvc;

//namespace ExpenseTrackerBussiness.Server.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class AuthController : ControllerBase
//    {
//        private readonly IUserService _userService;

//        public AuthController(IUserService userService)
//        {
//            _userService = userService;
//        }

//        [HttpPost("signup")]
//        public async Task<IActionResult> Signup([FromBody] SignupRequest dto)
//        {
//            try
//            {
//                var response = await _userService.Signup(dto);
//                return Ok(response);
//            }
//            catch (Exception ex)
//            {
//                return BadRequest(ex);
//            }
//        }

//        [HttpPost("login")]
//        public async Task<IActionResult> Signin([FromBody] LoginRequest dto)
//        {
//            try
//            {
//                var response = await _userService.Login(dto);
//                return Ok(response);
//            }
//            catch (Exception ex)
//            {
//                return Unauthorized(ex);
//            }
//        }
//    }
//}




using ExpenseTrackerBussiness.Server.DTOs.Login;
using ExpenseTrackerBussiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.Services;
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
        public async Task<IActionResult> Signup(SignupRequest request)
        {
            //var response = await _userService.Signup(request);
            //if (!response.Success)
            //    return BadRequest(response);

            //return Ok(response);
            try
            {
                var responce = await _userService.Signup(request);
                return Ok(responce);
            }
            catch (Exception ex) { 
                return BadRequest( new { message = "unable to signup" });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            //var response = await _userService.Login(request);
            //if (!response.Success)
            //    return Unauthorized(response);

            //return Ok(response);

            try
            {
                var responce = await _userService.Login( request);
                return Ok(responce);
            }
            catch (Exception)
            {
                return BadRequest(new { message = "unable to signin" });
            }
        }
    }
}


// use this as getting 400
//[HttpPost("signup")]
//public async Task<IActionResult> Signup(SignupRequest dto)
//{
//    try
//    {
//        var response = await _userService.Signup(dto);

//        // ✅ success case → 200 OK
//        return Ok(response);
//    }
//    catch (Exception ex)
//    {
//        // ❌ error case → 400 Bad Request
//        return BadRequest(new { message = ex.Message });
//    }
//}
