using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using BlotzTask.Data;
using BlotzTask.Data.Entities;
using BlotzTask.Services;
using Microsoft.Azure.KeyVault;
using Microsoft.Azure.Services.AppAuthentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration.AzureKeyVault;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();  
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    options.OperationFilter<SecurityRequirementsOperationFilter>();
});

builder.Services.AddScoped<ITaskService, TaskService>();
builder.Services.AddScoped<ILabelService, LabelService>();

builder.Services.AddIdentityApiEndpoints<User>()
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
    // CORS Best Practice https://q240iu43yr.feishu.cn/docx/JTkcdbwtloFHJWxvi0ocmTuOnjd?from=from_copylink
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000" // DEV frontend origin
                , "https://blotz-task-app.vercel.app") // Prod frontend origin    
                .WithMethods("GET", "POST", "OPTIONS") // Specify allowed methods, do not allow method never used.
                .WithHeaders("Content-Type", "Authorization") // Specify allowed headers,may be more headers to added.
                .AllowCredentials(); // TODO: anti-csrf need to be built.
        });
});

var app = builder.Build();

app.MapIdentityApi<User>();
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
