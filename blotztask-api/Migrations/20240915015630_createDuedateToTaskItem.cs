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
                name: "DueDate",
                table: "TaskItems",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedAt", "DueDate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7865), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7867) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedAt", "DueDate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7869), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7869) });

            migrationBuilder.UpdateData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedAt", "DueDate", "UpdatedAt" },
                values: new object[] { new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7870), new DateOnly(2024, 10, 1), new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7871) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DueDate",
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
