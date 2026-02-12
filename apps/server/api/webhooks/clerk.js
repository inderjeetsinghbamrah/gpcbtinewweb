import {Webhook} from 'svix';
import prisma from '../../prisma/prisma.js';

export default async function clerkWebhook(req, res) {
  try {
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = wh.verify(JSON.stringify(payload), headers);

    const { id, email_addresses } = evt.data;
    const email = email_addresses?.[0]?.email_address;

    if (evt.type === "user.created") {
      const user = await prisma.user.create({
        data: {
          clerkUserId: id,
          email,
          role: "STAFF",
        },
      });

      await prisma.userSecurity.create({
        data: { userId: user.id },
      });
    }

    if (evt.type === "user.updated") {
      await prisma.user.update({
        where: { clerkUserId: id },
        data: { email },
      });
    }

    if (evt.type === "user.deleted") {
      await prisma.user.delete({
        where: { clerkUserId: id },
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Webhook failed" });
  }
}
