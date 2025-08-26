using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBussiness.Server.DTOs.ForgetPassword
{
    public class ForgetPasswordRequest
    {
        //email
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }
    }
}