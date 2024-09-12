using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class CleanConsolidatedMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1809), new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1810) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1812), new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1813) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1814), new DateTime(2024, 9, 12, 1, 54, 13, 557, DateTimeKind.Utc).AddTicks(1814) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1388), new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1392) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1393), new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1394) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1395), new DateTime(2024, 9, 7, 6, 51, 14, 44, DateTimeKind.Utc).AddTicks(1395) });
        }
    }
}
