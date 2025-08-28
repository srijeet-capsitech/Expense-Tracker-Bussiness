////namespace ExpenseTrackerBusiness.Server.Data
////{
////    public class MongoDbContext
////    {
////    }
////}



//using AspNetCore.Identity.MongoDbCore.Extensions;
//using AspNetCore.Identity.MongoDbCore.Infrastructure;
//using AspNetCore.Identity.MongoDbCore.Models;
//using ExpenseTrackerBussiness.Server.Models;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using MongoDB.Bson;

//namespace ExpenseTrackerBussiness.Server.Data
//{
//    public static class MongoDbContext
//    {
//        public static IServiceCollection AddMongoIdentity(
//            this IServiceCollection services, IConfiguration configuration)
//        {
//            var mongoSettings = configuration.GetSection("MongoDbSettings");

//            services.Configure<MongoDbSettings>(mongoSettings);

//            services.AddIdentity<User, MongoIdentityRole<ObjectId>>()
//                .AddMongoDbStores<User, MongoIdentityRole<ObjectId>, ObjectId>(
//                    mongoSettings["ConnectionString"], mongoSettings["DatabaseName"])
//                .AddDefaultTokenProviders();

//            return services;
//        }
//    }

//    public class MongoDbSettings
//    {
//        public string ConnectionString { get; set; } = string.Empty;
//        public string DatabaseName { get; set; } = string.Empty;
//    }
//}



using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseTrackerBussiness.Server.Data
{
    public class MongoDbSettings
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string DatabaseName { get; set; } = string.Empty;
    }

    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IOptions<MongoDbSettings> options)
        {
            var client = new MongoClient(options.Value.ConnectionString);
            _database = client.GetDatabase(options.Value.DatabaseName);
        }

        public IMongoDatabase Database => _database;
    }
}
