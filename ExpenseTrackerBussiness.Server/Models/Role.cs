//namespace ExpenseTrackerBussiness.Server.Models
//{
//    public class Role
//    {
//    }
//}


using AspNetCore.Identity.MongoDbCore.Models;
using MongoDB.Bson;
using MongoDbGenericRepository.Attributes;

namespace ExpenseTrackerBussiness.Server.Models
{
    [CollectionName("Roles")]
    public class Role : MongoIdentityRole<ObjectId>
    {
    }
}
