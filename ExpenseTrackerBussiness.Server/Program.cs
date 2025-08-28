using AspNetCore.Identity.MongoDbCore.Infrastructure;
using ExpenseTrackerBussiness.Server.Models;
using ExpenseTrackerBussiness.Server.Services;
using ExpenseTrackerBussiness.Server.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Data;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
      
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<IMongoClient>(s =>
    new MongoClient(builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString")));


//builder.Services.AddIdentity<User, IdentityRole>()
//    .AddMongoDbStores<User, IdentityRole, string>(
//        builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString"),
//        builder.Configuration.GetValue<string>("MongoDbSettings:DatabaseName"))
//    .AddDefaultTokenProviders();

//builder.Services.AddIdentity<User, Role>()
//    .AddMongoDbStores<User, Role, string>(
//        builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString"),
//        builder.Configuration.GetValue<string>("MongoDbSettings:DatabaseName"))
//    .AddDefaultTokenProviders();

builder.Services.AddIdentity<User, Role>()
    .AddMongoDbStores<User, Role, ObjectId>(
        builder.Configuration["MongoDbSettings:ConnectionString"],
        builder.Configuration["MongoDbSettings:DatabaseName"])
    .AddDefaultTokenProviders();






builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)  // alag service mai banega 
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,  
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
            ClockSkew=TimeSpan.Zero  // token expire hone ke bad aur kitna time tak token validate rahega 
        };
    });


builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IUserService,UserService>();




// Rest of the configuration...



var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();


app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
