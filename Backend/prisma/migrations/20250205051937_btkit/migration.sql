/*
  Warnings:

  - Added the required column `postedBy` to the `userPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postedon` to the `userPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userPost" ADD COLUMN     "postedBy" TEXT NOT NULL,
ADD COLUMN     "postedon" TEXT NOT NULL;
