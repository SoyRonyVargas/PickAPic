using Domain.Entradas;
using Microsoft.AspNetCore.Mvc;
using Proyecto25AM.Services.IServices;

namespace Proyecto25AM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImagenController : Controller
    {
        private readonly IImagenService _imagenServices;
        public ImagenController(IImagenService imagenServices)
        {
            _imagenServices = imagenServices;
        }

        [HttpPost]
        public async Task<IActionResult> Crear([FromBody] CrearImagen i)
        {
            return Ok(await _imagenServices.CrearImagen(i));
        }
        [HttpGet]
        public async Task<IActionResult> GetImagenes()
        {
            return Ok(await _imagenServices.GetImagenes());
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile ArchivoImagen)
        {
            try
            {
                if (ArchivoImagen != null && ArchivoImagen.Length > 0)
                {
                    // Obtén la ruta de la carpeta wwwroot/uploads
                    var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                    // Asegúrate de que la carpeta uploads exista, si no, créala
                    if (!Directory.Exists(uploadsFolder))
                    {
                        Directory.CreateDirectory(uploadsFolder);
                    }

                    // Genera un nombre de archivo único para evitar colisiones
                    var fileName = Guid.NewGuid().ToString() + Path.GetExtension(ArchivoImagen.FileName);

                    // Combina la ruta de la carpeta uploads con el nombre de archivo único
                    var filePath = Path.Combine(uploadsFolder, fileName);

                    // Guarda la imagen en el sistema de archivos
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await ArchivoImagen.CopyToAsync(stream);
                    }

                    // Puedes devolver la ruta del archivo guardado o cualquier otra información que desees
                    return Ok(new { message = "Imagen subida exitosamente.", fileName });
                }
                else
                {
                    return BadRequest(new { message = "No se proporcionó ninguna imagen." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"Error al subir la imagen: {ex.Message}" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            return Ok(await _imagenServices.EliminarImagen(id));
        }
        //[HttpPut]
        //public async Task<IActionResult> ActualizarFact([FromBody] FacturaResponse i, int id)
        //{
        //    return Ok(await _facturaServices.ActualizarFactura(i, id));
        //}
        [HttpGet("{id}")]
        public ActionResult ObtenerFacID(int id)
        {
            return Ok(_imagenServices.ObtenerImagenPorId(id));
        }
    }
}
