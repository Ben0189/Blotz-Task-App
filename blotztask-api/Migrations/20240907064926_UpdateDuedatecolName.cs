using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDuedatecolName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DuedateAt",
                table: "TaskItems",
                newName: "Duedate");

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1253), new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1255) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1256), new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1257) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1258), new DateTime(2024, 9, 7, 6, 49, 25, 743, DateTimeKind.Utc).AddTicks(1258) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Duedate",
                table: "TaskItems",
                newName: "DuedateAt");

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7067), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7069) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7071), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7071) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7073), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7073) });
        }
    }
}
