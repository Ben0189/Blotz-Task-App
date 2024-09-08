using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class FixDueDateName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Duedate",
                table: "TaskItems",
                newName: "DueDate");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DueDate",
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
    }
}
