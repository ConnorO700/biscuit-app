using System.Diagnostics;
using System;
using biscuit_api.Data;
using MongoDB.Driver;
using biscuit_api.Models;
using biscuit_api.Services;


var CORSAllowSpecificOrigins = "_myAllowSpecificOrigins";
string environment = "." + Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

if (environment == ".")
{
    Trace.WriteLine("Failed to get Environment Variable: ASPNETCORE_ENVIRONMENT");
    environment = "";
}
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile($"appsettings{environment}.json", false, true)
    .AddEnvironmentVariables();

var configSection = builder.Configuration.GetSection("ApplicationUrls");
var urls = configSection.Get<ApplicationUrls>()?.Urls ?? new List<string>();
if (urls.Count == 0)
{
    Trace.WriteLine($"Quote Center CORS Error: Urls are missing from appsettings{environment}.json");
}

builder.Services.Configure<BiscuitDatabaseSettings>(
    builder.Configuration.GetSection("BiscuitDatabase"));

builder.Services.AddSingleton<BiscuitService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CORSAllowSpecificOrigins,
        policy =>
        {
            urls.ForEach(url => policy.WithOrigins(url));
            policy.AllowAnyHeader();
            policy.AllowAnyMethod();
            policy.AllowCredentials();
        });
});

string connectionString = "mongodb+srv://connor700:Hopmongo9387!@finitecluster.i2ykn.mongodb.net/";
string databaseName = "BiscuitDB";
string collectionName = "Biscuits";

var client = new MongoClient(connectionString);
var db = client.GetDatabase(databaseName);
var collection = db.GetCollection<Biscuit>(collectionName);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors(CORSAllowSpecificOrigins); //UseCors must be called before UseResponseCaching when using UseResponseCaching.

app.UseAuthorization();

app.MapControllers();

app.Run();
