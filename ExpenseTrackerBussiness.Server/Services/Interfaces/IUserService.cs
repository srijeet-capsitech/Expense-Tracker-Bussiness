//using ExpenseTrackerBusiness.Server.Dto.Signup;
using ExpenseTrackerBussiness.Server.Dto.Signup;
using ExpenseTrackerBussiness.Server.DTOs.Login;
using ExpenseTrackerBussiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.Models;

namespace ExpenseTrackerBussiness.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<SignupResponse> Signup(SignupRequest request);
        Task<LoginResponse> Login(LoginRequest request);
    }
}


