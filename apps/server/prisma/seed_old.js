import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    /* -------------------- STATES -------------------- */
    const statesData = [
        { name: 'Punjab', code: 'PB' },
        { name: 'Haryana', code: 'HR' },
        { name: 'Rajasthan', code: 'RJ' },
        { name: 'Uttar Pradesh', code: 'UP' },
        { name: 'Maharashtra', code: 'MH' },
        { name: 'Gujarat', code: 'GJ' },
        { name: 'Madhya Pradesh', code: 'MP' },
        { name: 'Bihar', code: 'BR' },
        { name: 'West Bengal', code: 'WB' },
        { name: 'Tamil Nadu', code: 'TN' },
        { name: 'Karnataka', code: 'KA' },
        { name: 'Kerala', code: 'KL' },
        { name: 'Telangana', code: 'TS' },
        { name: 'Andhra Pradesh', code: 'AP' },
        { name: 'Odisha', code: 'OD' },
        { name: 'Chhattisgarh', code: 'CG' },
        { name: 'Jharkhand', code: 'JH' },
        { name: 'Assam', code: 'AS' },
        { name: 'Himachal Pradesh', code: 'HP' },
        { name: 'Uttarakhand', code: 'UK' }
    ];

    const states = {};
    for (const s of statesData) {
        states[s.code] = await prisma.state.create({ data: s });
    }

    /* -------------------- DISTRICTS -------------------- */
    const districtsData = [
        { name: 'Bathinda', code: 'BTD', state: 'PB' },
        { name: 'Ludhiana', code: 'LDH', state: 'PB' },

        { name: 'Gurugram', code: 'GGN', state: 'HR' },
        { name: 'Hisar', code: 'HSR', state: 'HR' },

        { name: 'Jaipur', code: 'JPR', state: 'RJ' },
        { name: 'Kota', code: 'KTA', state: 'RJ' },

        { name: 'Lucknow', code: 'LKO', state: 'UP' },
        { name: 'Noida', code: 'NDA', state: 'UP' },

        { name: 'Pune', code: 'PUN', state: 'MH' },
        { name: 'Nagpur', code: 'NGP', state: 'MH' }
    ];

    const districts = {};
    for (const d of districtsData) {
        districts[d.code] = await prisma.district.create({
            data: {
                name: d.name,
                code: d.code,
                stateId: states[d.state].id
            }
        });
    }

    /* -------------------- INSTITUTES (15) -------------------- */
    const institutesData = Array.from({ length: 15 }).map((_, i) => ({
        instituteCode: `GPC${100 + i}`,
        name: `Government Polytechnic College ${i + 1}`,
        yearOfEstb:1950,
        logo: '/uploads/institutes/logo.svg',
        instituteHeroImage: '/uploads/institutes/hero.jpg',
        aboutInstitute: 'About institute',
        history: 'Institute history',
        mission: 'Institute mission',
        vision: 'Institute vision',
        principalMessage: 'Welcome message',
        principalPhoto: '/uploads/institutes/principal.jpg',
        addressLine1: 'Main Road',
        addressLine2: 'Near Bus Stand',
        city: 'City',
        pincode: 151001,
        stateId: states.PB.id,
        districtId: districts.BTD.id,
        contact: `98765432${10 + i}`,
        emailID: `info${i}@gpc.edu`,
        facebookLink: `https://facebook.com/gpc${i}`,
        linkedInLink: `https://linkedin.com/gpc${i}`,
        twitterLink: `https://twitter.com/gpc${i}`,
        instagramLink: `https://instagram.com/gpc${i}`,
        youtubeLink: `https://youtube.com/gpc${i}`,
        createdBy: 'system'
    }));

    await prisma.instituteProfile.createMany({ data: institutesData });

    await prisma.event.createMany({
        skipDuplicates: true, // avoids errors if seed is run multiple times
        data: [
            {
                title: 'Annual Tech Symposium 2025',
                description:
                    'A state-level technical symposium featuring workshops, hackathons, and expert talks.',
                date: new Date('2025-02-15T10:00:00.000Z'),
                location: 'Main Auditorium',
                imageUrl: '/uploads/events/tech-symposium-2025.jpg',
            },
            {
                title: 'National Skill Development Workshop',
                description:
                    'Hands-on training workshop focused on employability and industry-aligned skills.',
                date: new Date('2025-03-05T09:30:00.000Z'),
                location: 'Seminar Hall A',
                imageUrl: '/uploads/events/skill-workshop.jpg',
            },
            {
                title: 'Alumni Meet & Networking Day',
                description:
                    'An interaction session between alumni, students, and faculty to foster collaboration.',
                date: new Date('2025-04-10T11:00:00.000Z'),
                location: 'Conference Hall',
                imageUrl: null,
            },
            {
                title: 'Campus Placement Drive – Phase I',
                description:
                    'Recruitment drive with participation from multiple core and IT companies.',
                date: new Date('2025-06-01T08:30:00.000Z'),
                location: 'Placement Cell',
                imageUrl: '/uploads/events/placement-drive.jpg',
            },
        ],
    });

    console.log('✅ States, districts & institutes seeded successfully');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
