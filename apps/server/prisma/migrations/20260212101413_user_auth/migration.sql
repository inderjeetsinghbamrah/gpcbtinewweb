/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Event` table. All the data in the column will be lost.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Event_title_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "imageUrl",
DROP COLUMN "location",
DROP COLUMN "title",
DROP COLUMN "updatedAt",
ADD COLUMN     "imageURL" TEXT[],
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserSecurity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "forcePassword" BOOLEAN NOT NULL DEFAULT true,
    "forceProfile" BOOLEAN NOT NULL DEFAULT true,
    "firstLoginAt" TIMESTAMP(3),

    CONSTRAINT "UserSecurity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "loginAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "logoutAt" TIMESTAMP(3),
    "ipAddress" TEXT,

    CONSTRAINT "UserSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSecurity_userId_key" ON "UserSecurity"("userId");

-- AddForeignKey
ALTER TABLE "UserSecurity" ADD CONSTRAINT "UserSecurity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSession" ADD CONSTRAINT "UserSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
