import { MigrationInterface, QueryRunner } from "typeorm";

export class Uzchess1776967429824 implements MigrationInterface {
    name = 'Uzchess1776967429824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."questions_status_enum" AS ENUM('pending', 'answered', 'repeated', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(64) NOT NULL, "phoneNumber" character varying(16) NOT NULL, "questions" character varying(2000) NOT NULL, "status" "public"."questions_status_enum" NOT NULL, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."vacancy_type_enum" AS ENUM('fullTime', 'partTime')`);
        await queryRunner.query(`CREATE TABLE "vacancy" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(256) NOT NULL, "address" character varying(128) NOT NULL, "description" text NOT NULL, "phoneNumber" character varying(16) NOT NULL, "type" "public"."vacancy_type_enum" NOT NULL, "salary" character varying(64) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_8fa1981f63bc24e1712707d492b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."application_status_enum" AS ENUM('active', 'accepted', 'rejected')`);
        await queryRunner.query(`CREATE TABLE "application" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(64) NOT NULL, "phoneNumber" character varying(16) NOT NULL, "email" character varying(64) NOT NULL, "vacancyId" integer NOT NULL, "resume" character varying(128) NOT NULL, "status" "public"."application_status_enum" NOT NULL DEFAULT 'active', CONSTRAINT "PK_569e0c3e863ebdf5f2408ee1670" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "news-categories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "UQ_46dfd8e5bbd7e6ed7943e0c2514" UNIQUE ("title"), CONSTRAINT "PK_8a2f5e54cfd4d2a81d587175405" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "representatives" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(64) NOT NULL, "image" character varying(128) NOT NULL, "email" character varying(64) NOT NULL, "phoneNumber" character varying(16) NOT NULL, "resume" text NOT NULL, CONSTRAINT "PK_80e9af53802d5e0376d1ae8f68c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branches" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "countryId" integer NOT NULL, "representativeId" integer NOT NULL, "city" character varying(64) NOT NULL, "latitude" numeric NOT NULL, "longitude" numeric NOT NULL, "phoneNumber" character varying(16) NOT NULL, CONSTRAINT "PK_7f37d3b42defea97f1df0d19535" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, "flag" character varying(128) NOT NULL, CONSTRAINT "UQ_f0ab39b0865e4939e37308fe0a7" UNIQUE ("title"), CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "newsTags" ("newsId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_e31f1f300a3abbac123f08f5222" PRIMARY KEY ("newsId", "tagId"))`);
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer NOT NULL, "countryId" integer, "title" character varying(256) NOT NULL, "image" character varying(128) NOT NULL, "date" date NOT NULL, "content" text NOT NULL, "newsCategoryId" integer, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "UQ_25cae3ff755adc0abe5ca284092" UNIQUE ("title"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "faqs" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "question" character varying(256) NOT NULL, "answer" character varying(512) NOT NULL, CONSTRAINT "PK_2ddf4f2c910f8e8fa2663a67bf0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "faqsTags" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "faqsId" integer NOT NULL, "tagId" integer NOT NULL, CONSTRAINT "PK_23268b6dc3e447098bea95db51d" PRIMARY KEY ("id", "faqsId", "tagId"))`);
        await queryRunner.query(`CREATE TABLE "instagram-posts" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "image" character varying(256) NOT NULL, "link" character varying(128) NOT NULL, CONSTRAINT "PK_2e56f8c1f5d2d8c48fe8a5d5dbe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "fullName" character varying(64) NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "books" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "authorId" integer NOT NULL, "categoryId" integer NOT NULL, "title" character varying(256) NOT NULL, "image" character varying(128) NOT NULL, "description" text, "file" character varying(256) NOT NULL, "pages" integer NOT NULL, "year" integer NOT NULL, "bookId" integer, CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book-category" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "PK_f23a27b133afab1fee51cd3c250" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "expenses" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, "date" date NOT NULL, "title" character varying(256) NOT NULL, "description" text NOT NULL, "transactionId" integer NOT NULL, CONSTRAINT "UQ_f1728b7ae26a61b0e695217ff16" UNIQUE ("transactionId"), CONSTRAINT "PK_94c3ceb17e3140abc9282c20610" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."donations_paidby_enum" AS ENUM('payme', 'click', 'oson')`);
        await queryRunner.query(`CREATE TABLE "donations" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, "fullName" character varying(64) NOT NULL, "date" character varying NOT NULL, "paidBy" "public"."donations_paidby_enum" NOT NULL, CONSTRAINT "PK_c01355d6f6f50fc6d1b4a946abf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event-category" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "UQ_ef2fb00833a2ee483e1824ed2e2" UNIQUE ("title"), CONSTRAINT "PK_aceebefb938d7d62c50dcbac8b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "categoryId" integer NOT NULL, "title" character varying(256) NOT NULL, "content" text NOT NULL, "image" character varying(128) NOT NULL, "date" date NOT NULL, "address" character varying(128) NOT NULL, "eventCategoryId" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "social-links" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, "icon" character varying(128) NOT NULL, "link" character varying(128) NOT NULL, CONSTRAINT "PK_c3c95a24a8ac78a37948792a7db" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "useful-links" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(128) NOT NULL, "icon" character varying(128) NOT NULL, "link" character varying(128) NOT NULL, CONSTRAINT "PK_b1debf5290c7bc44ab987a6ec19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "static-info" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "appStoreLink" character varying(128) NOT NULL, "playMarketLink" character varying(128) NOT NULL, "aboutUs" text NOT NULL, CONSTRAINT "PK_611b43e6db2308b18e6b064a4e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "language" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying(64) NOT NULL, CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "application" ADD CONSTRAINT "FK_212bd5fedd50c7cb4c2082d214e" FOREIGN KEY ("vacancyId") REFERENCES "vacancy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_ec93cf21dec41ec5ca617512ef0" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_11c91735b88837592a524662e69" FOREIGN KEY ("representativeId") REFERENCES "representatives"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "newsTags" ADD CONSTRAINT "FK_c15e3bc5da07ad136f046bfccfe" FOREIGN KEY ("newsId") REFERENCES "news"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "newsTags" ADD CONSTRAINT "FK_6a3e1431f0059d7e07c983e941b" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_6573fe000551c966d07f27513c0" FOREIGN KEY ("newsCategoryId") REFERENCES "news-categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "news" ADD CONSTRAINT "FK_81498edd9eaa443973b3f8f655f" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "faqsTags" ADD CONSTRAINT "FK_e2eb9ee9fbbcc7b0122693438bc" FOREIGN KEY ("faqsId") REFERENCES "faqs"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "faqsTags" ADD CONSTRAINT "FK_a91e2b80338307840e51d8522bc" FOREIGN KEY ("tagId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_58da082103f7e0eacfc37553d32" FOREIGN KEY ("bookId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "books" ADD CONSTRAINT "FK_a0f13454de3df36e337e01dbd55" FOREIGN KEY ("categoryId") REFERENCES "book-category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_c23e03034cb11fd05bd2962ba45" FOREIGN KEY ("eventCategoryId") REFERENCES "event-category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_c23e03034cb11fd05bd2962ba45"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_a0f13454de3df36e337e01dbd55"`);
        await queryRunner.query(`ALTER TABLE "books" DROP CONSTRAINT "FK_58da082103f7e0eacfc37553d32"`);
        await queryRunner.query(`ALTER TABLE "faqsTags" DROP CONSTRAINT "FK_a91e2b80338307840e51d8522bc"`);
        await queryRunner.query(`ALTER TABLE "faqsTags" DROP CONSTRAINT "FK_e2eb9ee9fbbcc7b0122693438bc"`);
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_81498edd9eaa443973b3f8f655f"`);
        await queryRunner.query(`ALTER TABLE "news" DROP CONSTRAINT "FK_6573fe000551c966d07f27513c0"`);
        await queryRunner.query(`ALTER TABLE "newsTags" DROP CONSTRAINT "FK_6a3e1431f0059d7e07c983e941b"`);
        await queryRunner.query(`ALTER TABLE "newsTags" DROP CONSTRAINT "FK_c15e3bc5da07ad136f046bfccfe"`);
        await queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_11c91735b88837592a524662e69"`);
        await queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_ec93cf21dec41ec5ca617512ef0"`);
        await queryRunner.query(`ALTER TABLE "application" DROP CONSTRAINT "FK_212bd5fedd50c7cb4c2082d214e"`);
        await queryRunner.query(`DROP TABLE "language"`);
        await queryRunner.query(`DROP TABLE "static-info"`);
        await queryRunner.query(`DROP TABLE "useful-links"`);
        await queryRunner.query(`DROP TABLE "social-links"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "event-category"`);
        await queryRunner.query(`DROP TABLE "donations"`);
        await queryRunner.query(`DROP TYPE "public"."donations_paidby_enum"`);
        await queryRunner.query(`DROP TABLE "expenses"`);
        await queryRunner.query(`DROP TABLE "book-category"`);
        await queryRunner.query(`DROP TABLE "books"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "instagram-posts"`);
        await queryRunner.query(`DROP TABLE "faqsTags"`);
        await queryRunner.query(`DROP TABLE "faqs"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "news"`);
        await queryRunner.query(`DROP TABLE "newsTags"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "branches"`);
        await queryRunner.query(`DROP TABLE "representatives"`);
        await queryRunner.query(`DROP TABLE "news-categories"`);
        await queryRunner.query(`DROP TABLE "application"`);
        await queryRunner.query(`DROP TYPE "public"."application_status_enum"`);
        await queryRunner.query(`DROP TABLE "vacancy"`);
        await queryRunner.query(`DROP TYPE "public"."vacancy_type_enum"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TYPE "public"."questions_status_enum"`);
    }

}
