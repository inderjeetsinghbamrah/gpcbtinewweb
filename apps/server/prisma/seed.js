import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting Full System Seed...");

    /* ======================================================
       1️⃣ STATES
    ====================================================== */

    const punjab = await prisma.state.upsert({
        where: { code: "PB" },
        update: {},
        create: { name: "Punjab", code: "PB" },
    });

    const haryana = await prisma.state.upsert({
        where: { code: "HR" },
        update: {},
        create: { name: "Haryana", code: "HR" },
    });

    /* ======================================================
       2️⃣ DISTRICTS
    ====================================================== */

    const bathindaDistrict = await prisma.district.upsert({
        where: {
            stateId_name: {
                stateId: punjab.id,
                name: "Bathinda",
            },
        },
        update: {},
        create: {
            name: "Bathinda",
            code: "BTD",
            stateId: punjab.id,
        },
    });

    const ludhianaDistrict = await prisma.district.upsert({
        where: {
            stateId_name: {
                stateId: punjab.id,
                name: "Ludhiana",
            },
        },
        update: {},
        create: {
            name: "Ludhiana",
            code: "LDH",
            stateId: punjab.id,
        },
    });

    /* ======================================================
       3️⃣ CITIES
    ====================================================== */

    const bathindaCity = await prisma.city.upsert({
        where: {
            districtId_name: {
                districtId: bathindaDistrict.id,
                name: "Bathinda",
            },
        },
        update: {},
        create: {
            name: "Bathinda",
            code: "BTI",
            districtId: bathindaDistrict.id,
        },
    });

    /* ======================================================
       4️⃣ INSTITUTE PROFILE
    ====================================================== */

    const institute = await prisma.instituteProfile.upsert({
        where: { instituteCode: "GPC100" },
        update: {},
        create: {
            instituteCode: "GPC100",
            name: "Government Polytechnic College Bathinda",
            shortName: "GPC Bathinda",
            yearOfEstb: 1950,

            logo: "/uploads/logo.svg",
            instituteHeroImage: "/uploads/hero.jpg",

            aboutInstitute: "Premier government technical institute.",
            aboutUs: "We provide diploma education.",
            history: "Established in 1950.",
            mission: "Skill development & innovation.",
            vision: "Technical excellence.",

            principalMessage: "Welcome to GPC Bathinda",
            principalPhoto: "/uploads/principal.jpg",

            addressLine1: "Main Road",
            addressLine2: "Near Bus Stand",
            pincode: 151001,

            stateId: punjab.id,
            districtId: bathindaDistrict.id,
            cityId: bathindaCity.id,

            contact: "9876543210",
            emailID: "info@gpcbathinda.ac.in",

            facebookLink: "https://facebook.com/gpcbathinda",
            linkedInLink: "https://linkedin.com/company/gpcbathinda",
            twitterLink: "https://twitter.com/gpcbathinda",
            instagramLink: "https://instagram.com/gpcbathinda",
            youtubeLink: "https://youtube.com/@gpcbathinda",

            createdBy: "system",
        },
    });

    /* ======================================================
       5️⃣ DOMAINS
    ====================================================== */

    await prisma.instituteDomain.createMany({
        data: [
            { domain: "gpcbathinda.ac.in", isPrimary: true, instituteId: institute.id },
            { domain: "localhost:3000", instituteId: institute.id },
        ],
        skipDuplicates: true,
    });

    /* ======================================================
       6️⃣ USERS
    ====================================================== */

    const superAdmin = await prisma.user.upsert({
        where: { email: "superadmin@eduobal.com" },
        update: {},
        create: {
            clerkUserId: "clerk_super_admin",
            email: "superadmin@eduobal.com",
            role: "SUPER_ADMIN",
        },
    });

    const instituteAdmin = await prisma.user.upsert({
        where: { email: "admin@gpcbathinda.ac.in" },
        update: {},
        create: {
            clerkUserId: "clerk_institute_admin",
            email: "admin@gpcbathinda.ac.in",
            role: "INSTITUTE_ADMIN",
            instituteId: institute.id,
        },
    });

    const staffUser = await prisma.user.upsert({
        where: { email: "staff@gpcbathinda.ac.in" },
        update: {},
        create: {
            clerkUserId: "clerk_staff",
            email: "staff@gpcbathinda.ac.in",
            role: "STAFF",
            instituteId: institute.id,
        },
    });

    /* ======================================================
       7️⃣ USER SECURITY
    ====================================================== */

    await prisma.userSecurity.upsert({
        where: { userId: instituteAdmin.id },
        update: {},
        create: {
            userId: instituteAdmin.id,
            forcePassword: true,
            forceProfile: true,
        },
    });

    /* ======================================================
       8️⃣ USER SESSION
    ====================================================== */

    await prisma.userSession.create({
        data: {
            userId: instituteAdmin.id,
            ipAddress: "127.0.0.1",
        },
    });

    /* ======================================================
       9️⃣ NAVBAR + MEGA MENU
    ====================================================== */

    const academicsMenu = await prisma.navbarMenu.create({
        data: {
            instituteId: institute.id,
            title: "Academics",
            slug: "academics",
            isMegaMenu: true,
            order: 1,
        },
    });

    const deptSubMenu = await prisma.navbarSubMenu.create({
        data: {
            menuId: academicsMenu.id,
            title: "Departments",
            slug: "departments",
            hasMegaMenu: true,
            order: 1,
        },
    });

    await prisma.megaMenuItem.createMany({
        data: [
            {
                subMenuId: deptSubMenu.id,
                title: "Computer Science Engineering",
                linkUrl: "/departments/cse",
                order: 1,
            },
            {
                subMenuId: deptSubMenu.id,
                title: "Mechanical Engineering",
                linkUrl: "/departments/me",
                order: 2,
            },
        ],
    });

    /* ======================================================
       🔟 SLIDER + ITEMS
    ====================================================== */

    const slider = await prisma.slider.create({
        data: {
            instituteId: institute.id,
            title: "Homepage Slider",
            transition: "FADE",
            design: "HERO",
            autoplay: true,
        },
    });

    await prisma.sliderItem.createMany({
        data: [
            {
                sliderId: slider.id,
                imageUrl: "/uploads/slide1.jpg",
                altText: "Campus View",
                sortOrder: 1,
            },
            {
                sliderId: slider.id,
                imageUrl: "/uploads/slide2.jpg",
                altText: "Admissions Open",
                sortOrder: 2,
            },
        ],
    });

    /* ======================================================
       1️⃣1️⃣ EVENTS (Schema Corrected)
    ====================================================== */

    await prisma.event.createMany({
        data: [
            {
                name: "Annual Tech Symposium",
                description: "State level technical festival",
                date: new Date("2025-02-15"),
                imageURL: ["/uploads/events/event1.jpg"],
            },
            {
                name: "Placement Drive 2025",
                description: "Campus recruitment drive",
                date: new Date("2025-06-01"),
                imageURL: ["/uploads/events/event2.jpg"],
            },
        ],
        skipDuplicates: true,
    });

    console.log("✅ Full System Seed Completed Successfully");
}

main()
.catch((e) => {
    console.error("❌ Seed Failed:", e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
