using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class RemoveSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskItems_AspNetUsers_UserId",
                table: "TaskItems");

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "TaskItems",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "TaskItems",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_TaskItems_AspNetUsers_UserId",
                table: "TaskItems",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskItems_AspNetUsers_UserId",
                table: "TaskItems");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "TaskItems",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "LabelId", "Color", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Red", "Tasks that need to be addressed immediately", "Urgent" },
                    { 2, "Yellow", "Tasks that are currently being worked on", "In Progress" },
                    { 3, "Green", "Tasks that have been completed", "Completed" }
                });

            migrationBuilder.InsertData(
                table: "TaskItems",
                columns: new[] { "Id", "CreatedAt", "Description", "DueDate", "IsDone", "Title", "UpdatedAt", "UserId" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7865), "Description for Task 1", new DateOnly(2024, 10, 1), false, "Initial Task 1", new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7867), null },
                    { 2, new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7869), "Description for Task 2", new DateOnly(2024, 10, 1), true, "Initial Task 2", new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7869), null },
                    { 3, new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7870), "Description for Task 3", new DateOnly(2024, 10, 1), false, "Initial Task 3", new DateTime(2024, 9, 15, 1, 56, 29, 965, DateTimeKind.Utc).AddTicks(7871), null }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_TaskItems_AspNetUsers_UserId",
                table: "TaskItems",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
