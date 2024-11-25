using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class DefaultLabels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
