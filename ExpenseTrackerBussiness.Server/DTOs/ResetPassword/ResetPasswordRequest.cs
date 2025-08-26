using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBussiness.Server.DTOs.ResetPassword

{

    public class ResetPasswordRequest

    {


        [Required(ErrorMessage = "Email is required.")]

        [EmailAddress(ErrorMessage = "Invalid email format.")]

        public string Email { get; set; } = string.Empty;


        [Required(ErrorMessage = "Password is required.")]

        [RegularExpression(

            @"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$",

            ErrorMessage = "Password must be 8-15 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."

        )]

        //[BsonElement("password")]


        public string NewPassword { get; set; } = string.Empty;

        //cnf pass

        [Required(ErrorMessage = "Password is required.")]

        [RegularExpression(

            @"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$",

            ErrorMessage = "Password must be 8-15 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."

        )]

        //[BsonElement("password")]

        public string ConfirmPassword { get; set; } = string.Empty ;

    }

}


