//using ExpenseTrackerBusiness.Server.Dto.Signup;
using ExpenseTrackerBussiness.Server.DTOs.Signup;
using ExpenseTrackerBussiness.Server.DTOs.Login;
using ExpenseTrackerBussiness.Server.Models;

namespace ExpenseTrackerBussiness.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<SignupResponce> Signup(SignupRequest dto);
        Task<LoginResponce> Login(LoginRequest dto);
    }
}


