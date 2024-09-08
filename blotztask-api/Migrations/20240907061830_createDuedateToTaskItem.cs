using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class createDuedateToTaskItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateOnly>(
                name: "Duedate",
                table: "TaskItems",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "Duedate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4322), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4324) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "Duedate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4325), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4326) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "Duedate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4327), new DateOnly(1, 1, 1), new DateTime(2024, 9, 7, 6, 18, 30, 105, DateTimeKind.Utc).AddTicks(4327) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Duedate",
                table: "TaskItems");

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
    }
}
