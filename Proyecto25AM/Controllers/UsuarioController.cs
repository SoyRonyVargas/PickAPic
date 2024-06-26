﻿using Domain.Dto;
using Microsoft.AspNetCore.Mvc;
using Proyecto25AM.Services.Iservices;
using Proyecto25AM.Services.Services;

namespace Proyecto25AM.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioServices _usuarioServices;
        public UsuarioController(IUsuarioServices usuarioServices)
        {
            _usuarioServices = usuarioServices;
        }

        [HttpPost("registro")]
        public async Task<IActionResult> Crear([FromBody] UsuarioResponse i)
        {
            return Ok( await _usuarioServices.CrearUsuario(i));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UsuarioResponse i)
        {
            return Ok(await _usuarioServices.AuthLogin(i.Correo , i.Password));
        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            return Ok(await _usuarioServices.GetUsers());
        }
        [HttpDelete]
        public async Task <IActionResult> Eliminar(int id)
        {
            return Ok(await _usuarioServices.EliminarUser(id));
        }

        [HttpPut]
        public async Task<IActionResult> ActualizarUsuario([FromBody] UsuarioResponse i, int id)
        {
            return Ok(await _usuarioServices.ActualizarUsuario(i, id));
        }

        [HttpGet("{id}")]
        public ActionResult ObtenerUserID(int id)
        {
            return Ok( _usuarioServices.ObtenerUserId(id));
        }
    }

}
