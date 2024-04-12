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
        Task<Response<List<Imagen>>> GetImagenes(List<int> status);
        Task<Response<List<Imagen>>> GetImagenesPorUsuario(int idUsuario);
        Task<Response<Imagen>> CrearImagen(CrearImagen request);
        Task<Response<bool>> ActualizarImagen(EditarImagen request);
        Task<Response<bool>> EliminarImagen(int id);
        ActionResult<Response<Imagen>> ObtenerImagenPorId(int id);
        ActionResult<Response<Imagen>> ObtenerImagenPorIdLimpio(int id);
    }
}
