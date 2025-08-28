
//using System;
//using System.ComponentModel.DataAnnotations;
//using MongoDB.Bson;
//using MongoDB.Bson.Serialization.Attributes;

//namespace ExpenseTrackerBussiness.Server.Models
//{
//    public class User
//    {
//        [BsonId]
//        [BsonRepresentation(BsonType.ObjectId)]
//        public string Id { get; set; } = string.Empty;

//        //[BsonElement("employeeId")]
//        //public string EmployeeId { get; set; }

//        [Required(ErrorMessage = "Name is required.")]
//        [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 30 characters.")]
//        [BsonElement("name")]
//        public string Name { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Email is required.")]
//        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
//        [BsonElement("email")]
//        public string Email { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Password is required.")]
//        //[RegularExpression()]


//        [BsonElement("password")]
//        public string Password { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Phone number is required.")]
//        [BsonElement("phone")]
//        public string Phone { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Role of the user must be defined.")]
//        [BsonElement("role")]
//        public string Role { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Created by is required.")]
//        [BsonElement("createdBy")]
//        public string CreatedBy { get; set; } = string.Empty;

//        [Required]
//        [BsonElement("departmentId")]
//        public string DepartmentId { get; set; } = string.Empty;

//        //[Required]
//        //[BsonElement("organisationId")]
//        //public string? OrganisationId { get; set; }

//        [Required]
//        [BsonElement("organisationName")]
//        public string OrganisationName { get; set; } = string.Empty;


//        [BsonElement("updatedAt")]
//        public DateTime UpdatedAt { get; set; }

//        //[BsonElement("deletedBy")]
//        //public DateTime DeletedBy { get; set; }


//        [BsonElement("deactivatedBy")]
//        public string DeactivateddBy { get; set; } = string.Empty;

//        [BsonElement("status")]
//        public Boolean status { get; set; }

//        [BsonElement("refreshToken")]
//        public string RefreshToken { get; set; } = string.Empty;
//    }
//}



//using MongoDB.Bson;

//using MongoDB.Bson.Serialization.Attributes;

//using System.ComponentModel.DataAnnotations;

//namespace ExpenseTrackerBussiness.Server.Models

//{

//    public class User

//    {

//        //mongo id

//        [BsonId]

//        [BsonRepresentation(BsonType.ObjectId)]

//        public string Id { get; set; } = string.Empty;

//        //emaployee id(not required now)

//        //public string EmployeeId { get; set; }


//        //email

//        [Required(ErrorMessage = "Name is required.")]

//        [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 30 characters.")]

//        [BsonElement("name")]

//        public string Name { get; set; } = string.Empty;


//        //email

//        [Required(ErrorMessage = "Email is required.")]

//        [EmailAddress(ErrorMessage = "Invalid Email Address.")]

//        [BsonElement("email")]

//        public string Email { get; set; } = string.Empty;


//        //password

//        [Required(ErrorMessage = "Password is required.")]

//        [RegularExpression(

//            @"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,15}$",

//            ErrorMessage = "Password must be 8-15 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."

//        )]

//        [BsonElement("password")]

//        public string Password { get; set; } = string.Empty;


//        //phone 

//        [Required(ErrorMessage = "Phone number is required.")]

//        [Phone(ErrorMessage = "Invalid Phone no format.")]

//        [BsonElement("phoneNo")]

//        public string Phone { get; set; } = string.Empty;


//        //role

//        [Required(ErrorMessage = "Role of the user must be defined.")]

//        [BsonElement("role")]

//        //public UserRole Role { get; set; }
//        public Role Role { get; set; }


//        //createdBY user id

//        [BsonRepresentation(BsonType.ObjectId)]

//        [BsonElement("createdBy")]

//        [Required(ErrorMessage = "Created by is required.")]

//        public string CreatedBy { get; set; } = string.Empty;


//        //department id 

//        [BsonElement("departmentId")]

//        [BsonRepresentation(BsonType.ObjectId)]

//        public string DepartmentId { get; set; } = string.Empty;


//        //bussniess name

//        [StringLength(35, MinimumLength = 3, ErrorMessage = "Bussiness Name must be between 3 to 30 characters.")]

//        [BsonElement("bussinessName")]

//        [Required(ErrorMessage = "Bussiness Name is Required.")]

//        public string BussinessName { get; set; } = string.Empty;


//        //timestamp 

//        [BsonElement("updatedAt")]

//        public DateTime UpdatedAt { get; set; }


//        //refresh token of user

//        [BsonElement("refreshToken")]

//        public string RefreshToken { get; set; } = string.Empty;


//        //deactivated by user id

//        [BsonElement("deactivatedBy")]

//        [BsonRepresentation(BsonType.ObjectId)]

//        public string DeactivatedBy { get; set; } = string.Empty;


//        //user status

//        [BsonElement("status")]

//        public UserStatus Status { get; set; }


//        //resetOtp

//        [BsonElement("otp")]

//        public string Otp { get; set; } = string.Empty;


//        //otp expiry time

//        [BsonElement("otpExpiry")]

//        public DateTime OtpExpiry { get; set; }

//    }


//    //enum for roles

//    //public  enum UserRole
//    public enum Role

//    {

//        Admin,

//        SubAdmin,

//        Approver,

//        Submitter

//    }

//    //enum for userstatus

//    public enum UserStatus

//    {

//        Active,

//        Inactive,

//    }

//}


//using Microsoft.AspNetCore.Identity;
//using MongoDB.Bson;
//using MongoDB.Bson.Serialization.Attributes;
//using System.ComponentModel.DataAnnotations;

//namespace ExpenseTrackerBussiness.Server.Models
//{
//    public class User : IdentityUser
//    {
//        [BsonId]
//        [BsonRepresentation(BsonType.ObjectId)]
//        public override string Id { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Name is required.")]
//        [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 30 characters.")]
//        [BsonElement("name")]
//        public string Name { get; set; } = string.Empty;

//        //[Required(ErrorMessage = "Phone number is required.")]
//        [Phone(ErrorMessage = "Invalid Phone no format.")]
//        //[BsonElement("phoneNo")]
//        public override string PhoneNumber { get; set; } = string.Empty;

//        [Required(ErrorMessage = "Role of the user must be defined.")]
//        [BsonElement("role")]
//        public Role Role { get; set; }

//        [BsonRepresentation(BsonType.ObjectId)]
//        [BsonElement("createdBy")]
//        [Required(ErrorMessage = "Created by is required.")]
//        public string CreatedBy { get; set; } = string.Empty;

//        [BsonElement("departmentId")]
//        [BsonRepresentation(BsonType.ObjectId)]
//        public string DepartmentId { get; set; } = string.Empty;

//        [StringLength(35, MinimumLength = 3, ErrorMessage = "Business Name must be between 3 to 35 characters.")]
//        [BsonElement("bussinessName")]
//        [Required(ErrorMessage = "Business Name is required.")]
//        public string BussinessName { get; set; } = string.Empty;

//        [BsonElement("updatedAt")]
//        public DateTime UpdatedAt { get; set; }

//        [BsonElement("refreshToken")]
//        public string RefreshToken { get; set; } = string.Empty;

//        [BsonElement("deactivatedBy")]
//        [BsonRepresentation(BsonType.ObjectId)]
//        public string DeactivatedBy { get; set; } = string.Empty;

//        [BsonElement("status")]
//        public UserStatus Status { get; set; }

//        [BsonElement("otp")]
//        public string Otp { get; set; } = string.Empty;

//        [BsonElement("otpExpiry")]
//        public DateTime OtpExpiry { get; set; }
//        //public string Password { get; internal set; } = string.Empty;
//        //public string Phone { get; internal set; } = String.Empty;
//    }

//    public enum Role
//    {
//        Admin,
//        SubAdmin,
//        Approver,
//        Submitter
//    }

//    public enum UserStatus
//    {
//        Active,
//        Inactive
//    }
//}





//as using AspNetCore.Identity.MOngoDbCore so do this : 


using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDbGenericRepository.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerBussiness.Server.Models
{
    // Inherit from IdentityUser<ObjectId> (Mongo best practice, avoids string hacks)

    [CollectionName("Users")]
    public class User : MongoIdentityUser<ObjectId>
    {
        [Required(ErrorMessage = "Name is required.")]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "Name must be between 3 to 30 characters.")]
        [BsonElement("name")]
        public string Name { get; set; } = string.Empty;

        // PhoneNumber already exists in IdentityUser
        // Just add validation if you want it enforced
        [Phone(ErrorMessage = "Invalid phone number format.")]
        public override string PhoneNumber { get; set; } = string.Empty;

        [Required(ErrorMessage = "Business Name is required.")]
        [StringLength(35, MinimumLength = 3, ErrorMessage = "Business Name must be between 3 to 35 characters.")]
        [BsonElement("businessName")]
        public string BusinessName { get; set; } = string.Empty;

        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("createdBy")]
        public string? CreatedBy { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        [BsonElement("departmentId")]
        public string? DepartmentId { get; set; }

        [BsonElement("updatedAt")]
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;

        [BsonElement("refreshToken")]
        public string RefreshToken { get; set; } = string.Empty;

        [BsonElement("deactivatedBy")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? DeactivatedBy { get; set; }

        [BsonElement("status")]
        public UserStatus Status { get; set; } = UserStatus.Active;

        [BsonElement("otp")]
        public string? Otp { get; set; }

        [BsonElement("otpExpiry")]
        public DateTime? OtpExpiry { get; set; }
    }

    // Let Identity handle roles via RoleManager
    // This enum is optional, if you want "fixed" roles
    public enum UserStatus
    {
        Active,
        Inactive
    }
}
