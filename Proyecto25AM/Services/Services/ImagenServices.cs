using Domain.Dto;
using Domain.Entities;
using Domain.Entradas;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Proyecto25AM.Context;
using Proyecto25AM.Services.IServices;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Proyecto25AM.Services.Services
{
    public class ImagenService : IImagenService
    {
        private readonly ApplicationDbContext _context;
        public string Mensaje;

        public ImagenService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Response<List<Imagen>>> GetImagenes(List<int> status)
        {
            try
            {
                
                Mensaje = "La lista de Imágenes";

                var response = await _context.Imagenes.Where( x => status.Contains(x.status) ).OrderByDescending(x => x.IdImagen).ToListAsync();

                if (response.Count > 0)
                {
                    Mensaje = "La lista de Imágenes";
                    return new Response<List<Imagen>>(response, Mensaje);
                }
                else
                {
                    return new Response<List<Imagen>>(Mensaje);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Surgió un error: " + ex.Message);
            }
        }

        public async Task<Response<Imagen>> CrearImagen(CrearImagen request)
        {
            try
            {
                Imagen imagen = new Imagen()
                {
                    NombreImagen = request.NombreImagen,
                    Descripcion = request.Descripcion,
                    UrlImagen = request.UrlImagen,
                    IdUsuario = request.IdUsuario,
                    FechaCarga = DateTime.Now,
                    Categoria = request.Categoria,
                    Likes = 0 // Puedes establecer un valor predeterminado
                };

                _context.Imagenes.Add(imagen);
                await _context.SaveChangesAsync();

                return new Response<Imagen>(imagen);
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrió un error: " + ex.Message);
            }
        }

        public async Task<Response<bool>> ActualizarImagen(EditarImagen request)
        {
            try
            {

                var imagenActualizar = _context.Imagenes.Where(x => x.IdImagen == request.IdImagen).FirstOrDefault();
                if( imagenActualizar == null )
                {
                    return new Response<bool>(false, "No valido");
                }

                imagenActualizar.status = request.status;
                
                imagenActualizar.Descripcion = request.Descripcion;
               
                imagenActualizar.Categoria = request.Categoria;
                
                imagenActualizar.NombreImagen = request.NombreImagen;

                await _context.SaveChangesAsync();

                return new Response<bool>(true, "No valido");
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrió un error: " + ex.Message);
            }
        }

        // Resto de las funciones CRUD...

        public ActionResult<Response<Imagen>> ObtenerImagenPorId(int id)
        {
            var res = _context.Imagenes.Find(id);
            try
            {
                if (res != null)
                {
                    if( res.status == 1 )
                    {
                        return new Response<Imagen>( null , "Error imagen no disponible");
                    }

                    return new Response<Imagen>(res);
                }
                else
                {
                    Mensaje = "No se encontró ningún registro";
                    return new Response<Imagen>(Mensaje);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Surgió un error: " + ex.Message);
            }
        }

        public ActionResult<Response<Imagen>> ObtenerImagenPorIdLimpio(int id)
        {
            var res = _context.Imagenes.Find(id);
            try
            {
                if (res != null)
                {
                    return new Response<Imagen>(res);
                }
                else
                {
                    Mensaje = "No se encontró ningún registro";
                    return new Response<Imagen>(Mensaje);
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Surgió un error: " + ex.Message);
            }
        }

        public Task<Response<Imagen>> CrearImagenFN(CrearImagen request)
        {
            throw new NotImplementedException();
        }

       
        public async Task<Response<bool>> EliminarImagen(int id)
        {
            try
            {
                var imagen = _context.Imagenes.Find(id);

                if (imagen != null)
                {
                    _context.Imagenes.Remove(imagen);
                    await _context.SaveChangesAsync(); // Cambié a SaveChangesAsync para hacerlo asincrónico
                    return new Response<bool>(true);
                }
                else
                {
                    var mensaje = "No se encontró ninguna imagen con el ID proporcionado";
                    return new Response<bool>(false, mensaje);
                }
            }
            catch (Exception ex)
            {
                var mensajeError = "Surgió un error al eliminar la imagen: " + ex.Message;
                return new Response<bool>(false, mensajeError);
            }
        }

    }
}