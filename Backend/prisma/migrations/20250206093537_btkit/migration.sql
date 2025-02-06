-- CreateTable
CREATE TABLE "fans" (
    "id" SERIAL NOT NULL,
    "following" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,

    CONSTRAINT "fans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fans" ADD CONSTRAINT "fans_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
