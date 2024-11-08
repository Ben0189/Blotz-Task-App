using System.Security.Claims;

public class UserContextMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<UserContextMiddleware> _logger;

    public UserContextMiddleware(RequestDelegate next, ILogger<UserContextMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Check if the user is authenticated
        if (context.User.Identity?.IsAuthenticated == true)
        {
            // Extract UserId from the claims
            var userId = context.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            
            if (userId == null)
            {
                _logger.LogError("Unable to get user Id in UserContextMiddleware for an authenticated user.");
                throw new UnauthorizedAccessException("Unable to get user Id in UserContextMiddleware.");
            }

            // Store UserId in HttpContext.Items
            context.Items["UserId"] = userId;
        }

        // Pass request to the next middleware in the pipeline
        await _next(context);
    }
}
