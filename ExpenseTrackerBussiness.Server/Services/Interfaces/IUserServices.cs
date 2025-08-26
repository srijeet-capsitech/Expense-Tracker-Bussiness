using ExpenseTrackerBusiness.Server.DTOs.Signup;
using ExpenseTrackerBusiness.Server.DTOs.Login;
using ExpenseTrackerBusiness.Server.DTOs.ForgetPassword;
using ExpenseTrackerBusiness.Server.DTOs.ResetPassword;
using ExpenseTrackerBusiness.Server.DTOs.VerifyOTP;
using ExpenseTrackerBusiness.Server.Models;
using ExpenseTrackerBussiness.Server.DTOs.ForgetPassword;

namespace ExpenseTrackerBusiness.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<SignupResponse> Signup(SignupRequest dto);
        Task<LoginResponse> Login(LoginRequest dto);
        Task<ForgetPasswordResponse> ForgetPasssword(ForgetPasswordRequest dto);
        Task<ResetPasswordResponse> ResetPassword(ResetPasswordRequest dto);
        Task<VerifyOTPResponse> VerifyOTP(VerifyOTPRequest dto);
    }
}


