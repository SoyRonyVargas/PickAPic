using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Imagen
    {
        [Key]
        public int IdImagen { get; set; }
        public string NombreImagen { get; set; }
        public string Descripcion { get; set; }
        public string UrlImagen { get; set; }
        public int IdUsuario { get; set; }
        public DateTime FechaCarga { get; set; }
        public string Categoria { get; set; }
        public int Likes { get; set; }
    }
}
