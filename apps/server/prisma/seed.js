import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const now = new Date();
  const sample = [
    {
      title: 'Orientation Day',
      description: 'Kick-off event for new students with campus tour and Q&A.',
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
      location: 'Main Auditorium',
      imageUrl: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Tech Talk: Modern Web',
      description: 'A deep dive into modern web development patterns and tooling.',
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14),
      location: 'Room B-204',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Career Fair 2025',
      description: 'Meet recruiters and explore internship opportunities.',
      date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 30),
      location: 'Exhibition Hall',
      imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  for (const e of sample) {
    await prisma.event.upsert({
      where: { title: e.title },
      create: e,
      update: e
    });
  }

    const maharashtra = await prisma.state.upsert({
        where: { name: "Maharashtra" },
        update: {},
        create: {
            name: "Maharashtra",
            pincode: "400001"
        }
    });

    const gujarat = await prisma.state.upsert({
        where: { name: "Gujarat" },
        update: {},
        create: {
            name: "Gujarat",
            pincode: "380001"
        }
    });

    /**
     * 2. DISTRICTS
     */
    const pune = await prisma.district.upsert({
        where: {
            stateId_name: {
                stateId: maharashtra.id,
                name: "Pune"
            }
        },
        update: {},
        create: {
            name: "Pune",
            code: "PN",
            stateId: maharashtra.id
        }
    });

    const ahmedabad = await prisma.district.upsert({
        where: {
            stateId_name: {
                stateId: gujarat.id,
                name: "Ahmedabad"
            }
        },
        update: {},
        create: {
            name: "Ahmedabad",
            code: "AMD",
            stateId: gujarat.id
        }
    });

    /**
     * 3. INSTITUTE PROFILE
     */
    await prisma.instituteProfile.upsert({
        where: { instituteCode: "INST001" },
        update: {},
        create: {
            instituteCode: "INST001",
            name: "ABC Institute of Technology",
            logo: "/logos/abc.png",
            instituteHeroImage: "/hero/abc.jpg",
            aboutInstitute: "Premier technical institute",
            history: "Established in 2005",
            mission: "Quality education",
            vision: "Future-ready graduates",
            principalMessage: "Welcome to our institute",
            principalPhoto: "/principal/abc.jpg",
            addressLine1: "Main Road",
            addressLine2: "Near City Center",
            districtId: pune.id,
            contact: BigInt("9876543210"),
            emailID: "info@abcinstitute.edu",
            facebookLink: "https://facebook.com/abcinstitute",
            linkedInLink: "https://linkedin.com/company/abcinstitute",
            twitterLink: "https://twitter.com/abcinstitute",
            instagramLink: "https://instagram.com/abcinstitute",
            youtubeLink: "https://youtube.com/@abcinstitute",
            createdBy: "system"
        }
    });

  console.log('Seeded events');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
