using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class DefaultLabelWithNewIDs : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 4);

            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "LabelId", "Color", "Description", "Name" },
                values: new object[,]
                {
                    { 6, "#CDB2FF", "Work related tasks", "Work" },
                    { 7, "#FBFAC2", "Personal tasks", "Personal" },
                    { 8, "#278291", "Academic tasks", "Academic" },
                    { 9, "#1458C6", "Other tasks", "Others" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 9);

            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "LabelId", "Color", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Purple", "Work related tasks", "Work" },
                    { 2, "Yellow", "Personal tasks", "Personal" },
                    { 3, "Teal", "Academic tasks", "Academic" },
                    { 4, "Sky", "Other tasks", "Others" }
                });
        }
    }
}
