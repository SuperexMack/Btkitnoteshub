-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pdfFolder" (
    "int" SERIAL NOT NULL,
    "fileo" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "pdfFolder_pkey" PRIMARY KEY ("int")
);

-- AddForeignKey
ALTER TABLE "pdfFolder" ADD CONSTRAINT "pdfFolder_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
