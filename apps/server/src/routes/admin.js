import express from 'express';
import prisma from '../../prisma/prisma.js';
import {createClerkClient} from '@clerk/clerk-sdk-node';
import {authMiddleware} from './middleware.js';

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

const router = express.Router();

router.post("/create-user", authMiddleware, async (req, res) => {
  const admin = await prisma.user.findUnique({
    where: { clerkUserId: req.clerkUserId },
  });

  if (admin.role !== "ADMIN")
    return res.status(403).json({ message: "Forbidden" });

  const { email, role } = req.body;

  const clerkUser = await clerk.users.createUser({
    emailAddress: [email],
    password: "Temp@123",
  });

  await prisma.user.update({
    where: { clerkUserId: clerkUser.id },
    data: {
      role,
      instituteId: admin.instituteId,
    },
  });

  res.json({ success: true });
});

export default router;
