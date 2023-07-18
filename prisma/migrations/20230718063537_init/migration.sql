-- CreateTable
CREATE TABLE "url" (
    "_id" TEXT NOT NULL,
    "shorter_id" TEXT NOT NULL,
    "full_url" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "url_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_shorter_id_key" ON "url"("shorter_id");
