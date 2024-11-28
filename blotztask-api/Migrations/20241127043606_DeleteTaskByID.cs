using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class DeleteTaskByID : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 1,
                column: "Color",
                value: "#CDB2FF");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 2,
                column: "Color",
                value: "#FBFAC2");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 3,
                column: "Color",
                value: "#278291");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 4,
                column: "Color",
                value: "#1458C6");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 1,
                column: "Color",
                value: "Purple");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 2,
                column: "Color",
                value: "Yellow");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 3,
                column: "Color",
                value: "Teal");

            migrationBuilder.UpdateData(
                table: "Labels",
                keyColumn: "LabelId",
                keyValue: 4,
                column: "Color",
                value: "Sky");
        }
    }
}
