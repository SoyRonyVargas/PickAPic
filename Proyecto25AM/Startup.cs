
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Proyecto25AM.Context;
using Proyecto25AM.Services.Iservices;
using Proyecto25AM.Services.IServices;
using Proyecto25AM.Services.Services;


namespace Proyecto25AM
{
    public class Startup
    {

       
        public Startup(IConfiguration configuration) 
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });
            services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp", builder =>
                {
                    builder.WithOrigins("http://localhost:5174") // Reemplaza con la URL de tu aplicación React
                           .AllowAnyHeader()
                           .AllowAnyMethod();
                });
            });

            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

          
            //add connection bd
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ApiCors", Version = "v1" });
            });
            services.AddCors(x => x.AddPolicy("EnableCors", builder =>
            {
                builder.SetIsOriginAllowedToAllowWildcardSubdomains()
                .AllowAnyMethod()
                .AllowAnyHeader();

            }));

            //Inyeccion de dependencias
            services.AddTransient<IUsuarioServices, UsuarioServices>();
            services.AddTransient<IRolServices, RolServices>();
            services.AddTransient<IPuestoServices, PuestoServices>();
            services.AddTransient<IFacturaServices, FacturaServices>();
            services.AddTransient<IEmpleadoServices, EmpleadoServices>();
            services.AddTransient<IDepartamentoServices, DepartamentoServices>();
            services.AddTransient<IClienteServices, ClienteServices>();
            services.AddTransient<IImagenService, ImagenService>();

        }
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) 
        {
            app.UseStaticFiles(); // Asegúrate de tener esto configurado
            app.UseCors("AllowAnyOrigin");
            app.UseCors("AllowReactApp");

            if (env.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthorization();
            app.UseCors("EnableCors");


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
        

    }
}
