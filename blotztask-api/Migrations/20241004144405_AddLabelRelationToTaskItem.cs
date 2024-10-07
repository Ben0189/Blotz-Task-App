using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BlotzTask.Migrations
{
    /// <inheritdoc />
    public partial class AddLabelRelationToTaskItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LabelId",
                table: "TaskItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_TaskItems_LabelId",
                table: "TaskItems",
                column: "LabelId");

            migrationBuilder.AddForeignKey(
                name: "FK_TaskItems_Labels_LabelId",
                table: "TaskItems",
                column: "LabelId",
                principalTable: "Labels",
                principalColumn: "LabelId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TaskItems_Labels_LabelId",
                table: "TaskItems");

            migrationBuilder.DropIndex(
                name: "IX_TaskItems_LabelId",
                table: "TaskItems");

            migrationBuilder.DropColumn(
                name: "LabelId",
                table: "TaskItems");
        }
    }
}
