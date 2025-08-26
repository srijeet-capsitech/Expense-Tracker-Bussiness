using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBusiness.Server.Models
{
    public class User
    {
        public string Id { get; set; }

        public string EmployeeId { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(70, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 70 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "password is required.")]
        public string Password { get; set; }

        [Required(ErrorMessage = "phone number is required.")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Role of the user must be defined.")]
        public string Role { get; set; }

        [Required(ErrorMessage = "created by is required.")]
        public string CreatedBy { get; set; }

        [Required]
        public string? DepartmentId { get; set; }

        [Required]
        public string? OrganisationId { get; set; }

        public DateTime UpdatedAt { get; set; }

        public DateTime DeletedBy { get; set; }

        public string RefreshToken { get; set; }

    }
}