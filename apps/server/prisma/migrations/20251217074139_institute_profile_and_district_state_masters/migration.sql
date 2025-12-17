-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,

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
CREATE TABLE "InstituteProfile" (
    "id" TEXT NOT NULL,
    "instituteCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "instituteHeroImage" TEXT NOT NULL,
    "aboutInstitute" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "vision" TEXT NOT NULL,
    "principalMessage" TEXT NOT NULL,
    "principalPhoto" TEXT NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT NOT NULL,
    "districtId" INTEGER NOT NULL,
    "contact" BIGINT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_pincode_key" ON "State"("pincode");

-- CreateIndex
CREATE INDEX "District_stateId_idx" ON "District"("stateId");

-- CreateIndex
CREATE UNIQUE INDEX "District_stateId_name_key" ON "District"("stateId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_instituteCode_key" ON "InstituteProfile"("instituteCode");

-- CreateIndex
CREATE UNIQUE INDEX "InstituteProfile_name_key" ON "InstituteProfile"("name");

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

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InstituteProfile" ADD CONSTRAINT "InstituteProfile_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
