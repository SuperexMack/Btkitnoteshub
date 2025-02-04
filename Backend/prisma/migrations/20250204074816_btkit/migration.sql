/*
  Warnings:

  - The primary key for the `pdfFolder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `int` on the `pdfFolder` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pdfFolder" DROP CONSTRAINT "pdfFolder_pkey",
DROP COLUMN "int",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "pdfFolder_pkey" PRIMARY KEY ("id");
