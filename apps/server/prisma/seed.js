import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Starting master seed...");

    /* ======================================================
       1️⃣ STATES
    ====================================================== */

    const states = {};

    const statesData = [
        { name: "Punjab", code: "PB" },
        { name: "Haryana", code: "HR" },
    ];

    for (const s of statesData) {
        states[s.code] = await prisma.state.upsert({
            where: { code: s.code },
            update: {},
            create: s,
        });
    }

    /* ======================================================
       2️⃣ DISTRICTS
    ====================================================== */

    const districts = {};

    const districtsData = [
        { name: "Bathinda", code: "BTD", state: "PB" },
        { name: "Ludhiana", code: "LDH", state: "PB" },
    ];

    for (const d of districtsData) {
        districts[d.code] = await prisma.district.upsert({
            where: {
                stateId_name: {
                    stateId: states[d.state].id,
                    name: d.name,
                },
            },
            update: {},
            create: {
                name: d.name,
                code: d.code,
                stateId: states[d.state].id,
            },
        });
    }

    /* ======================================================
       3️⃣ CITIES
    ====================================================== */

    const cities = {};

    const citiesData = [
        { name: "Bathinda", code: "BTI", district: "BTD" },
        { name: "Ludhiana", code: "LUD", district: "LDH" },
    ];

    for (const c of citiesData) {
        cities[c.name] = await prisma.city.upsert({
            where: {
                districtId_name: {
                    districtId: districts[c.district].id,
                    name: c.name,
                },
            },
            update: {},
            create: {
                name: c.name,
                code: c.code,
                districtId: districts[c.district].id,
            },
        });
    }

    /* ======================================================
       4️⃣ INSTITUTE
    ====================================================== */

    const institute = await prisma.instituteProfile.upsert({
        where: { instituteCode: "GPC100" },
        update: {},
        create: {
            instituteCode: "GPC100",
            name: "Government Polytechnic College Bathinda",
            shortName: "GPC Bathinda",
            yearOfEstb: 1950,

            logo: "/uploads/institutes/logo.svg",
            instituteHeroImage: "/uploads/institutes/hero.jpg",

            aboutInstitute: "About institute",
            aboutUs: "About Us",
            history: "Institute history",
            mission: "Institute mission",
            vision: "Institute vision",

            principalMessage: "Welcome to our institution",
            principalPhoto: "/uploads/institutes/principal.jpg",

            addressLine1: "Main Road",
            addressLine2: "Near Bus Stand",
            pincode: 151001,

            stateId: states.PB.id,
            districtId: districts.BTD.id,
            cityId: cities.Bathinda.id,

            contact: "9876543210",
            emailID: "info@gpcbathinda.ac.in",

            facebookLink: "https://facebook.com/gpcbathinda",
            linkedInLink: "https://linkedin.com/gpcbathinda",
            twitterLink: "https://twitter.com/gpcbathinda",
            instagramLink: "https://instagram.com/gpcbathinda",
            youtubeLink: "https://youtube.com/gpcbathinda",

            createdBy: "system",
        },
    });

    /* ======================================================
       5️⃣ DOMAINS
    ====================================================== */

    await prisma.instituteDomain.createMany({
        data: [
            { domain: "localhost", isPrimary: true, instituteId: institute.id },
            { domain: "localhost:5173", instituteId: institute.id },
            { domain: "localhost:3000", instituteId: institute.id },
        ],
        skipDuplicates: true,
    });

    /* ======================================================
       6️⃣ USERS
    ====================================================== */

    await prisma.user.upsert({
        where: { email: "superadmin@eduobal.com" },
        update: {},
        create: {
            clerkUserId: "clerk_super_admin_id",
            email: "superadmin@eduobal.com",
            role: "SUPER_ADMIN",
        },
    });

    await prisma.user.upsert({
        where: { email: "admin@gpcbathinda.ac.in" },
        update: {},
        create: {
            clerkUserId: "clerk_institute_admin_id",
            email: "admin@gpcbathinda.ac.in",
            role: "INSTITUTE_ADMIN",
            instituteId: institute.id,
        },
    });

    /* ======================================================
       7️⃣ NAVBAR
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

    const departmentsSubMenu = await prisma.navbarSubMenu.create({
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
                subMenuId: departmentsSubMenu.id,
                title: "Computer Science Engineering",
                linkUrl: "/academics/departments/cse",
                order: 1,
            },
            {
                subMenuId: departmentsSubMenu.id,
                title: "Mechanical Engineering",
                linkUrl: "/academics/departments/me",
                order: 2,
            },
            {
                subMenuId: departmentsSubMenu.id,
                title: "Civil Engineering",
                linkUrl: "/academics/departments/ce",
                order: 3,
            },
        ],
    });

    /* ======================================================
       8️⃣ SLIDER
    ====================================================== */

    const heroSlider = await prisma.slider.create({
        data: {
            instituteId: institute.id,
            title: "Homepage Hero Slider",
            transition: "FADE",
            design: "HERO",
            autoplay: true,
            intervalMs: 5000,
            isActive: true,
        },
    });

    await prisma.sliderItem.createMany({
        data: [
            {
                sliderId: heroSlider.id,
                imageUrl: "/uploads/slider/slide1.jpg",
                altText: "Campus View",
                sortOrder: 1,
                isEnabled: true,
            },
            {
                sliderId: heroSlider.id,
                imageUrl: "/uploads/slider/slide2.jpg",
                altText: "Admissions Open",
                sortOrder: 2,
                isEnabled: true,
            },
        ],
    });

    /* ======================================================
       9️⃣ EVENTS
    ====================================================== */

    await prisma.event.createMany({
        skipDuplicates: true,
        data: [
            {
                title: "Annual Tech Symposium",
                description: "State-level technical festival",
                date: new Date("2025-02-15"),
                location: "Main Auditorium",
            },
            {
                title: "Campus Placement Drive",
                description: "Placement drive for final-year students",
                date: new Date("2025-06-01"),
                location: "Placement Cell",
            },
        ],
    });

    console.log("✅ MASTER SEED COMPLETED SUCCESSFULLY");
}

main()
.catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
