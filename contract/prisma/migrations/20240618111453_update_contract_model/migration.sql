/*
  Warnings:

  - The primary key for the `Contract` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `Contract` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Contract` table. All the data in the column will be lost.
  - The `id` column on the `Contract` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `employeeId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employer` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_userId_fkey";

-- DropIndex
DROP INDEX "Contract_uid_key";

-- AlterTable
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_pkey",
DROP COLUMN "uid",
DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD COLUMN     "employer" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL,
ADD CONSTRAINT "Contract_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
