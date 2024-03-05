using Domain.Dto;
using Domain.Entities;
using Domain.Entradas;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Proyecto25AM.Services.IServices
{
    public interface IImagenService
    {
        Task<Response<List<Imagen>>> GetImagenes();
        Task<Response<Imagen>> CrearImagen(CrearImagen request);
        Task<Response<Imagen>> ActualizarImagen(CrearImagen request, int id);
        Task<Response<bool>> EliminarImagen(int id);
        ActionResult<Response<Imagen>> ObtenerImagenPorId(int id);
    }
}
