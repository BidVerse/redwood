-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Bidder', 'Contractor');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT DEFAULT E'unnamed',
    "bio" TEXT DEFAULT E'I have a boring bio',
    "profileImgUrl" TEXT,
    "role" "Role" NOT NULL DEFAULT E'Bidder',

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "name" TEXT DEFAULT E'unnamed',
    "description" TEXT DEFAULT E'unnamed',
    "amount" INTEGER NOT NULL DEFAULT 0,
    "accepted" BOOLEAN,
    "public" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
