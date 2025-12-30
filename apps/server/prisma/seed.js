import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Seeding domains & users only...");

    /* ---------------------------------
       FETCH EXISTING INSTITUTE
    ----------------------------------*/
    const institute = await prisma.instituteProfile.findUnique({
        where: { instituteCode: "GPC100" },
    });

    if (!institute) {
        throw new Error("Institute not found. Seed institute first.");
    }

    /* ---------------------------------
       DOMAIN MAPPING (LOCALHOST)
    ----------------------------------*/
    await prisma.instituteDomain.createMany({
        data: [
            {
                domain: "localhost",
                isPrimary: true,
                instituteId: institute.id,
            },
            {
                domain: "localhost:5173", // Vite
                instituteId: institute.id,
            },
            {
                domain: "localhost:3000", // Next.js
                instituteId: institute.id,
            },
        ],
        skipDuplicates: true,
    });

    console.log("✅ Domains seeded");

    /* ---------------------------------
       USERS (CLERK-MAPPED)
    ----------------------------------*/

    // 🔑 SUPER ADMIN (no institute)
    await prisma.user.upsert({
        where: { email: "superadmin@platform.com" },
        update: {},
        create: {
            clerkUserId: "clerk_super_admin_id", // replace with real Clerk ID
            email: "superadmin@eduobal.com",
            role: "SUPER_ADMIN",
        },
    });

    // 🏫 INSTITUTE ADMIN
    await prisma.user.upsert({
        where: { email: "admin@gpcbathinda.ac.in" },
        update: {},
        create: {
            clerkUserId: "clerk_institute_admin_id", // replace with real Clerk ID
            email: "admin@gpcbathinda.ac.in",
            role: "INSTITUTE_ADMIN",
            instituteId: institute.id,
        },
    });

    console.log("✅ Users seeded");
}

main()
    .catch((e) => {
        console.error("❌ Seed failed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
