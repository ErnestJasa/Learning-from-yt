using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MvcTutorial.Migrations
{
    public partial class raceDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Races",
                type: "date",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Races");
        }
    }
}
