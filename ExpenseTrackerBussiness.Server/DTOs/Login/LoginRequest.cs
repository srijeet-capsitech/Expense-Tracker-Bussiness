


// email 
// password




using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBussiness.Server.DTOs.Login
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required.")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$",
            ErrorMessage = "Password must be 8-15 characters long, with one uppercase, one lowercase, one digit, and one special character.")]
        public string Password { get; set; } = string.Empty;
    }
}