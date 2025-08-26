using ExpenseTrackerBussiness.Server.Models;

namespace ExpenseTrackerBussiness.Server.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateJwtToken(User user);
        string GenerateRefreshToken();
    }
}