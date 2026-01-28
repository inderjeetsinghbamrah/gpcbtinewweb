-- CreateEnum
CREATE TYPE "SliderTransition" AS ENUM ('FADE', 'SLIDE', 'ZOOM', 'FLIP', 'CUBE', 'NONE');

-- CreateEnum
CREATE TYPE "SliderDesign" AS ENUM ('HERO', 'FULL_WIDTH', 'CARD', 'MINIMAL', 'THUMBNAIL');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'INSTITUTE_ADMIN', 'STAFF');

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "districtId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstituteProfile" (
    "id" TEXT NOT NULL,
    "instituteCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "yearOfEstb" INTEGER NOT NULL,
    "logo" TEXT NOT NULL,
    "instituteHeroImage" TEXT NOT NULL,
    "aboutInstitute" TEXT NOT NULL,
    "aboutUs" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "principalMessage" TEXT NOT NULL,
    "principalPhoto" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "contact" VARCHAR(15) NOT NULL,
    "emailID" TEXT NOT NULL,
    "facebookLink" TEXT NOT NULL,
    "linkedInLink" TEXT NOT NULL,
    "twitterLink" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "youtubeLink" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstituteProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavbarMenu" (
    "id" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "icon" TEXT,
    "linkUrl" TEXT,
    "isMegaMenu" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NavbarMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavbarSubMenu" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "linkUrl" TEXT,
    "hasMegaMenu" BOOLEAN NOT NULL DEFAULT false,
    "order" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NavbarSubMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MegaMenuItem" (
    "id" TEXT NOT NULL,
    "subMenuId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT,
    "linkUrl" TEXT,
    "columnGroup" TEXT,
    "order" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MegaMenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slider" (
    "id" TEXT NOT NULL,
    "instituteId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "transition" "SliderTransition" NOT NULL DEFAULT 'FADE',
    "design" "SliderDesign" NOT NULL DEFAULT 'HERO',
    "autoplay" BOOLEAN NOT NULL DEFAULT true,
    "intervalMs" INTEGER NOT NULL DEFAULT 5000,
    "showIndicators" BOOLEAN NOT NULL DEFAULT true,
    "showArrows" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SliderItem" (
    "id" TEXT NOT NULL,
    "sliderId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "linkUrl" TEXT,
    "openInNewTab" BOOLEAN NOT NULL DEFAULT false,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "visibleFrom" TIMESTAMP(3),
    "visibleTo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SliderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "instituteId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstituteDomain" (
    "id" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "instituteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InstituteDomain_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_code_key" ON "State"("code");

-- CreateIndex
CREATE INDEX "State_name_idx" ON "State"("name");

-- CreateIndex
CREATE INDEX "District_stateId_idx" ON "District"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "District_stateId_name_key" ON "District"("stateId", "name");

-- CreateIndex
CREATE INDEX "City_districtId_idx" ON "City"("districtId");

-- CreateIndex
CREATE UNIQUE INDEX "City_districtId_name_key" ON "City"("districtId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_instituteCode_key" ON "InstituteProfile"("instituteCode");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_name_key" ON "InstituteProfile"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_shortName_key" ON "InstituteProfile"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_contact_key" ON "InstituteProfile"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_emailID_key" ON "InstituteProfile"("emailID");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_facebookLink_key" ON "InstituteProfile"("facebookLink");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_linkedInLink_key" ON "InstituteProfile"("linkedInLink");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_twitterLink_key" ON "InstituteProfile"("twitterLink");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_instagramLink_key" ON "InstituteProfile"("instagramLink");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_youtubeLink_key" ON "InstituteProfile"("youtubeLink");

-- CreateIndex
CREATE INDEX "InstituteProfile_stateId_idx" ON "InstituteProfile"("stateId");

-- CreateIndex
CREATE INDEX "InstituteProfile_districtId_idx" ON "InstituteProfile"("districtId");

-- CreateIndex
CREATE INDEX "InstituteProfile_cityId_idx" ON "InstituteProfile"("cityId");

-- CreateIndex
CREATE INDEX "NavbarMenu_instituteId_idx" ON "NavbarMenu"("instituteId");

-- CreateIndex
CREATE INDEX "NavbarSubMenu_menuId_idx" ON "NavbarSubMenu"("menuId");

-- CreateIndex
CREATE INDEX "MegaMenuItem_subMenuId_idx" ON "MegaMenuItem"("subMenuId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_title_key" ON "Event"("title");

-- CreateIndex
CREATE INDEX "Slider_instituteId_idx" ON "Slider"("instituteId");

-- CreateIndex
CREATE INDEX "SliderItem_sliderId_idx" ON "SliderItem"("sliderId");

-- CreateIndex
CREATE INDEX "SliderItem_isEnabled_idx" ON "SliderItem"("isEnabled");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_instituteId_idx" ON "User"("instituteId");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteDomain_domain_key" ON "InstituteDomain"("domain");

-- CreateIndex
CREATE INDEX "InstituteDomain_instituteId_idx" ON "InstituteDomain"("instituteId");

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteProfile" ADD CONSTRAINT "InstituteProfile_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteProfile" ADD CONSTRAINT "InstituteProfile_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteProfile" ADD CONSTRAINT "InstituteProfile_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavbarMenu" ADD CONSTRAINT "NavbarMenu_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "InstituteProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavbarSubMenu" ADD CONSTRAINT "NavbarSubMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "NavbarMenu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MegaMenuItem" ADD CONSTRAINT "MegaMenuItem_subMenuId_fkey" FOREIGN KEY ("subMenuId") REFERENCES "NavbarSubMenu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Slider" ADD CONSTRAINT "Slider_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "InstituteProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SliderItem" ADD CONSTRAINT "SliderItem_sliderId_fkey" FOREIGN KEY ("sliderId") REFERENCES "Slider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "InstituteProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteDomain" ADD CONSTRAINT "InstituteDomain_instituteId_fkey" FOREIGN KEY ("instituteId") REFERENCES "InstituteProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
