using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using BlotzTask.Data;
using BlotzTask.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.Azure.KeyVault;
using Microsoft.Azure.Services.AppAuthentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.AzureKeyVault;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();  
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ITaskService, TaskService>();

builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<BlotzTaskDbContext>();

builder.Services.AddAuthorization();

if (builder.Environment.IsDevelopment())
{
    var databaseConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    builder.Services.AddDbContext<BlotzTaskDbContext>(options => options.UseSqlServer(databaseConnectionString));
}

if (builder.Environment.IsProduction())
{
    var keyVaultEndpoint = builder.Configuration.GetSection("KeyVault").GetValue<string>("VaultURI");

    var keyVaultClient = new KeyVaultClient(new KeyVaultClient.AuthenticationCallback(new AzureServiceTokenProvider().KeyVaultTokenCallback));

    builder.Configuration.AddAzureKeyVault(keyVaultEndpoint, new DefaultKeyVaultSecretManager());

    var client = new SecretClient(new Uri(keyVaultEndpoint), new DefaultAzureCredential());
    builder.Services.AddDbContext<BlotzTaskDbContext>(options => options.UseSqlServer(client.GetSecret("db-string-connection").Value.Value.ToString()));

}

    builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});

var app = builder.Build();

app.MapIdentityApi<IdentityUser>();
// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
app.UseSwagger();
app.UseSwaggerUI();
// }

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("AllowSpecificOrigin");

app.MapSwagger().RequireAuthorization();
app.MapControllers()
.RequireAuthorization();

app.Run();
