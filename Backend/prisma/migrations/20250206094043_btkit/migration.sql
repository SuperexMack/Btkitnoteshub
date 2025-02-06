/*
  Warnings:

  - You are about to drop the column `followers` on the `fans` table. All the data in the column will be lost.
  - You are about to drop the column `followingId` on the `fans` table. All the data in the column will be lost.
  - Added the required column `followedby` to the `fans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "fans" DROP CONSTRAINT "fans_followingId_fkey";

-- AlterTable
ALTER TABLE "fans" DROP COLUMN "followers",
DROP COLUMN "followingId",
ADD COLUMN     "followedby" INTEGER NOT NULL;
