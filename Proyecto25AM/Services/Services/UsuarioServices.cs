using Domain.Dto;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto25AM.Context;
using Proyecto25AM.Services.Iservices;
using System.Diagnostics;

namespace Proyecto25AM.Services.Services
{
    public class UsuarioServices : IUsuarioServices
    {
        private readonly ApplicationDbContext _context;

        public string Mensaje;

        public UsuarioServices(ApplicationDbContext context)
        {
            _context = context;

        }

        //Creaciones de funciones CRUD
        public async Task<Response<List<Usuario>>> GetUsers()
        {
            try
            {
                Mensaje = "La lista de usuarios";

                var response = await _context.Usuarios.ToListAsync();

                if (response.Count > 0)
                {
                    Mensaje = "La lista de usuarios";
                    return new Response<List<Usuario>>(response, Mensaje);
                }
                else
                {
                    Mensaje = "No se encontra ningun registro";
                    return new Response<List<Usuario>>(Mensaje);
                }

            }
            catch (Exception ex)
            {
                throw new Exception("Surgio un error" + ex.Message);
            }
        }


        public async Task<Response<Usuario>> CrearUsuario(UsuarioResponse request)
        {
            try
            {
               
                var existe = _context.Usuarios.Where(x => x.Correo == request.Correo).FirstOrDefault();

                if( existe != null )
                {
                    return new Response<Usuario>(null , "Usuario ya registrado");
                }

                var user = new Usuario() { 
                    Correo = request.Correo,
                    Nombre = request.Nombre,
                    Password = request.Password,
                };

                _context.Usuarios.Add(user);

                await _context.SaveChangesAsync();

                return new Response<Usuario>(user);

            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrio un error" + ex.Message);
            }

        }

        public async Task<Response<Usuario>> ActualizarUsuario([FromBody] UsuarioResponse i , int id)
        {
            try
            {
                var res = _context.Usuarios.Find(id);
               
                return new Response<Usuario>(res);
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrio un error" + ex.Message);
            }
        }

        public async Task<Response<Usuario>> AuthLogin(string correo , string password)
        {
            try
            {
                var res = _context.Usuarios.Where( x=> x.Correo == correo).FirstOrDefault();
               
                if( res != null )
                {
                    if( res.Password == password )
                    {
                     return new Response<Usuario>(res);
                    }
                    return new Response<Usuario>(null, "Error de autenticacion");

                }

                return new Response<Usuario>(null , "Error de autenticacion");

            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrio un error" + ex.Message);
            }
        }

        public async Task<Response<Usuario>> EliminarUser(int id)
        {
            var res = _context.Usuarios.Find(id);
            _context.Usuarios.Remove(res);
            await _context.SaveChangesAsync();
            return new Response<Usuario>(res);
        }

        public ActionResult<Response<Usuario>> ObtenerUserId(int id)
        {
            var res = _context.Usuarios.Find(id);
            try
            {
                if (res != null)
                {
                    res = _context.Usuarios.FirstOrDefault(x => x.PkUsuario == id);
                    return new Response<Usuario>(res);
                }
                else
                {
                    Mensaje = "No se encontro ningún registro";
                    return new Response<Usuario>(Mensaje);
                }

            }
            catch (Exception ex)
            {
                throw new Exception("Surgio un error: " + ex.Message);
            }
        }
    }
}
