import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    /**
     * ⚠️ IMPORTANT
     * Replace these IDs with actual InstituteProfile IDs
     * fetched from your DB if already seeded
     */
    const institutes = await prisma.instituteProfile.findMany({
        select: { id: true, name: true }
    });

    if (institutes.length === 0) {
        throw new Error('No institutes found. Seed InstituteProfile first.');
    }

    for (const institute of institutes) {

        // -------------------------------
        // Slider (Homepage Hero)
        // -------------------------------
        const slider = await prisma.slider.create({
            data: {
                instituteId: institute.id,
                title: 'Homepage Hero Slider',
                description: 'Main homepage promotional slider',
                transition: 'FADE',
                design: 'HERO',
                autoplay: true,
                intervalMs: 5000,
                showIndicators: true,
                showArrows: true,
                isActive: true,
            }
        });

        // -------------------------------
        // Slider Items
        // -------------------------------
        await prisma.sliderItem.createMany({
            data: [
                {
                    sliderId: slider.id,
                    imageUrl: `https://cdn.example.com/${institute.id}/slider/slide1.webp`,
                    altText: 'Institute campus overview',
                    linkUrl: '/about',
                    openInNewTab: false,
                    isEnabled: true,
                    sortOrder: 1
                },
                {
                    sliderId: slider.id,
                    imageUrl: `https://cdn.example.com/${institute.id}/slider/slide2.webp`,
                    altText: 'Admissions Open',
                    linkUrl: '/admissions',
                    openInNewTab: false,
                    isEnabled: true,
                    sortOrder: 2
                },
                {
                    sliderId: slider.id,
                    imageUrl: `https://cdn.example.com/${institute.id}/slider/slide3.webp`,
                    altText: 'Achievements and Awards',
                    linkUrl: '/achievements',
                    openInNewTab: false,
                    isEnabled: false, // disabled slide
                    sortOrder: 3
                }
            ]
        });

        // -------------------------------
        // Secondary Slider (Events)
        // -------------------------------
        const eventsSlider = await prisma.slider.create({
            data: {
                instituteId: institute.id,
                title: 'Events Slider',
                description: 'Upcoming events and notices',
                transition: 'SLIDE',
                design: 'CARD',
                autoplay: false,
                showIndicators: false,
                showArrows: true,
                isActive: true,
            }
        });

        await prisma.sliderItem.createMany({
            data: [
                {
                    sliderId: eventsSlider.id,
                    imageUrl: `https://cdn.example.com/${institute.id}/events/event1.webp`,
                    altText: 'Annual Tech Fest',
                    linkUrl: '/events/techfest',
                    isEnabled: true,
                    sortOrder: 1
                },
                {
                    sliderId: eventsSlider.id,
                    imageUrl: `https://cdn.example.com/${institute.id}/events/event2.webp`,
                    altText: 'Convocation Ceremony',
                    linkUrl: '/events/convocation',
                    isEnabled: true,
                    sortOrder: 2
                }
            ]
        });

        console.log(`✔ Seeded sliders for institute: ${institute.name}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
