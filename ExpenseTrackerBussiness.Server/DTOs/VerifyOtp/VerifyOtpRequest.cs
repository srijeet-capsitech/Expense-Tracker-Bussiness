using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBussiness.Server.DTOs.VerifyOTP

{
    public class VerifyOTPRequest

    {

        [Required(ErrorMessage = "Email is required.")]

        [EmailAddress(ErrorMessage = "Invalid email format.")]

        public string Email { get; set; } = string.Empty;


        [Required(ErrorMessage = "OTP is required.")]

        [RegularExpression(@"^\d{4}$", ErrorMessage = "OTP must be exactly 4 digits.")]

        public string Otp { get; set; } = string.Empty;

    }

}
