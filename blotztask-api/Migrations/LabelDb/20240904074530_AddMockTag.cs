using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BlotzTask.Migrations.LabelDb
{
    /// <inheritdoc />
    public partial class AddMockTag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Labels",
                columns: new[] { "LabelId", "Color", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Red", "Description for Label 1", "Label 1" },
                    { 2, "Yellow", "Description for Label 2", "Label 2" },
                    { 3, "Blue", "Description for Label 3", "Label 3" }
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
        }
    }
}
