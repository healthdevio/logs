/*
  Warnings:

  - The values [SAUDEHD_RECEPCAO] on the enum `Sources` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Sources_new" AS ENUM ('RECEPTION');
ALTER TABLE "logs" ALTER COLUMN "source" TYPE "Sources_new" USING ("source"::text::"Sources_new");
ALTER TYPE "Sources" RENAME TO "Sources_old";
ALTER TYPE "Sources_new" RENAME TO "Sources";
DROP TYPE "Sources_old";
COMMIT;
