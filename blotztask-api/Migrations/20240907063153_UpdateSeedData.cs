using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7067), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7069) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7071), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7071) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7073), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 7, 6, 31, 53, 433, DateTimeKind.Utc).AddTicks(7073) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6509), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6512) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6513), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6514) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "DuedateAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6515), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6515) });
        }
    }
}
