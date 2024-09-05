using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class AddMockLabelData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Labels",
                columns: table => new
                {
                    LabelId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Labels", x => x.LabelId);
                });

            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "LabelId", "Color", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Red", "Tasks that need to be addressed immediately", "Urgent" },
                    { 2, "Yellow", "Tasks that are currently being worked on", "In Progress" },
                    { 3, "Green", "Tasks that have been completed", "Completed" }
                });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(916), new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(919) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(920), new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(921) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(922), new DateTime(2024, 9, 5, 6, 57, 20, 774, DateTimeKind.Utc).AddTicks(922) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Labels");

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9348), new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9350) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9352), new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9353) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9355), new DateTime(2024, 8, 29, 9, 40, 17, 75, DateTimeKind.Utc).AddTicks(9355) });
        }
    }
}
