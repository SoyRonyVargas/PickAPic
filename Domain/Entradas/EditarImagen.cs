using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Domain.Entradas
{
    public class EditarImagen
    {
        public string NombreImagen { get; set; }
        public string Descripcion { get; set; }
        public int IdImagen { get; set; }
        public string Categoria { get; set; }
        public int status { get; set; }
        public int Likes { get; set; }
        // Otros campos según tus necesidades
    }
}
