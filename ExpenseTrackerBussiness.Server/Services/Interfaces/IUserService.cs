//using ExpenseTrackerBusiness.Server.Dto.Signup;
using ExpenseTrackerBussiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.DTOs.Login;
using ExpenseTrackerBussiness.Server.Dto.Signup;

namespace ExpenseTrackerBussiness.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<SignupResponce> Signup(SignupRequest dto);
        Task<LoginResponse> Login(LoginRequest dto);
    }
}


