-- CreateTable
CREATE TABLE "comments" (
    "commentid" SERIAL NOT NULL,
    "commentTitle" TEXT NOT NULL,
    "commentAddedBy" INTEGER NOT NULL,
    "commentsid" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("commentid")
);

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_commentsid_fkey" FOREIGN KEY ("commentsid") REFERENCES "userPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
