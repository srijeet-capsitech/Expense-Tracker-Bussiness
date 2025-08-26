//using ExpenseTrackerBussiness.Server.Models;
//using System.ComponentModel.DataAnnotations;

////signup request of client (a company)

//namespace ExpenseTrackerBusiness.Server.DTOs.Signup
//{
//    public class SignupRequest
//    {
//        [Required(ErrorMessage = "Name is required.")]
//        [StringLength(70, MinimumLength = 3, ErrorMessage = "Name must be between 3 and 70 characters.")]
//        public string Name { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Email is required.")]
//        [EmailAddress(ErrorMessage = "Invalid email format.")]
//        public string Email { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Password is required.")]
//        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 100 characters.")]
//        public string Password { get; set; } = string.Empty;

//        [Required(ErrorMessage = "confirm password is required.")]
//        [StringLength(100, MinimumLength = 6, ErrorMessage = "Confirm password is required.")]
//        public string confirm_password { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Phone number is required.")]
//        [Phone(ErrorMessage = "Invalid phone number format.")]
//        public string Phone { get; set; } = string.Empty;

//        //[Required(ErrorMessage = "Role is required.")]

//        [Required(ErrorMessage = "Business name is required.")]
//        [StringLength(100, MinimumLength = 2, ErrorMessage = "Business or company name is required.")]
//        public string Business_name { get; set; } = string.Empty;

//        //public string Role { get; set; } = "Admin";
//        public string Role { get; set; } = string.Empty ;

        //[Required(ErrorMessage = "Created by is required.")]
        //public string CreatedBy { get; set; }

        //[Required(ErrorMessage = "Department ID is required.")]
        //public string DepartmentId { get; set; }   

        //[Required(ErrorMessage = "Organisation ID is required.")]
        //public string OrganisationId { get; set; }



        //conform password 


//}

//}



using System.ComponentModel.DataAnnotations;
using ExpenseTrackerBussiness.Server.Models;

namespace ExpenseTrackerBussiness.Server.DTOs.Signup
    {
        public class SignupRequest
        {
            [Required(ErrorMessage = "Name is required.")]
            [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 30 characters.")]
            public string Name { get; set; } = string.Empty;

            [Required(ErrorMessage = "Email is required.")]
            [EmailAddress(ErrorMessage = "Invalid Email Address.")]
            public string Email { get; set; } = string.Empty;

            [Required(ErrorMessage = "Password is required.")]
            [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$",
                ErrorMessage = "Password must be 8-15 characters long, with one uppercase, one lowercase, one digit, and one special character.")]
            public string Password { get; set; } = string.Empty;

            [Required(ErrorMessage = "Phone number is required.")]
            [Phone(ErrorMessage = "Invalid Phone no format.")]
            public string Phone { get; set; } = string.Empty;

            [Required(ErrorMessage = "Business name is required.")]
            [StringLength(100, MinimumLength = 2, ErrorMessage = "Business or company name is required.")]
            public string Business_name { get; set; } = string.Empty;

            [Required(ErrorMessage = "Role is required.")]
            public Role Role { get; set; }

            [Required(ErrorMessage = "Department ID is required.")]
            public string DepartmentId { get; set; } = string.Empty;

            [Required(ErrorMessage = "Business Name is required.")]
            [StringLength(35, MinimumLength = 3, ErrorMessage = "Business Name must be between 3 to 35 characters.")]
            public string BussinessName { get; set; } = string.Empty;

            public string CreatedBy { get; set; } = "System";
        }
    }






// signup request data :
// name - concate name of first name and last name 
// business name 
// email 
// phone number
// password
// confirm password 
// i accept capsi expence term and condition ----- filhal optional 

