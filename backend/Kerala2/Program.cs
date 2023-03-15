using Kerala2.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("LocalSqlConnection");

builder.Services.AddDbContext<ApplicationAPIContext>(options => {
    options
    .UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
    .UseLoggerFactory(LoggerFactory.Create(b => b.AddConsole().AddFilter(level => level >= LogLevel.Information)))
    .EnableSensitiveDataLogging()
    .EnableDetailedErrors();

});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

/*builder.Services.AddCors(p => p.AddPolicy("applicationCorsPolicy", build => build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader()
));*/

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

/*app.UseCors("applicationCorsPolicy");*/

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
