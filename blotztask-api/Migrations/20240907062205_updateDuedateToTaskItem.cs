using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class updateDuedateToTaskItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6509), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6512) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6513), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6514) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6515), new DateTime(2024, 9, 7, 6, 22, 5, 65, DateTimeKind.Utc).AddTicks(6515) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4322), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4324) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4325), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4326) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4327), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4327) });
        }
    }
}
