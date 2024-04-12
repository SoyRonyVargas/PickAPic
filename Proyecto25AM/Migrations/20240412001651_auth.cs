using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Proyecto25AM.Migrations
{
    /// <inheritdoc />
    public partial class auth : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Empleados_FkEmpleado",
                table: "Usuarios");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Rols_FkRol",
                table: "Usuarios");

            migrationBuilder.DropIndex(
                name: "IX_Usuarios_FkEmpleado",
                table: "Usuarios");

            migrationBuilder.DropIndex(
                name: "IX_Usuarios_FkRol",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "FkEmpleado",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "FkRol",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "User",
                table: "Usuarios",
                newName: "Nombre");

            migrationBuilder.AddColumn<string>(
                name: "Correo",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Correo",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "Nombre",
                table: "Usuarios",
                newName: "User");

            migrationBuilder.AddColumn<int>(
                name: "FkEmpleado",
                table: "Usuarios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "FkRol",
                table: "Usuarios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_FkEmpleado",
                table: "Usuarios",
                column: "FkEmpleado");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_FkRol",
                table: "Usuarios",
                column: "FkRol");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Empleados_FkEmpleado",
                table: "Usuarios",
                column: "FkEmpleado",
                principalTable: "Empleados",
                principalColumn: "PkEmpleado",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Rols_FkRol",
                table: "Usuarios",
                column: "FkRol",
                principalTable: "Rols",
                principalColumn: "PkRol",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
