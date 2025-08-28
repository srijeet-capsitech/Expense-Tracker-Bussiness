namespace ExpenseTrackerBussiness.Server.Dto.Signup
{
    public class SignupResponse
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        //public string Role { get; set; } 

        public string BussinessName { get; set; } = string.Empty;

        public string Token { get; set; } = string.Empty;
        public string RefreshToken { get; set; } = string.Empty;  // can alos try like store in cookie
        public string Message { get; set; } = string.Empty;
        //public bool Success { get; internal set; }
    }
}


// name 
// email
// business name 
