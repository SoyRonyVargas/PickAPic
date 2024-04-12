using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Dto
{
    public class Response<T>
    {
        public Response()
        {

        }
        public Response(object data, string message=null)
        {
            Succeded = true;
            Message = message;
            Result = data;
        }

        public Response(string message)
        {
            Succeded = true;
            Message = message;
        }

        public bool Succeded { get; set; }
        public string Message { get; set; }
        public object Result { get; set; }

    }
}
