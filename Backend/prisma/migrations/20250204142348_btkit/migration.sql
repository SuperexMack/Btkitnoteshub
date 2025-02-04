-- CreateTable
CREATE TABLE "userPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "postPhoto" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "userPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userPost" ADD CONSTRAINT "userPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
