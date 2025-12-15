import { PrismaClient } from '@prisma/client';

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
