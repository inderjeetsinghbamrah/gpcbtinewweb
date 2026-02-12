import express from 'express';
import prisma from '../../prisma/prisma.js';
import {authMiddleware} from './middleware.js';

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { clerkUserId: req.clerkUserId },
  });

  await prisma.userSession.updateMany({
    where: { userId: user.id, logoutAt: null },
    data: { logoutAt: new Date() },
  });

  res.json({ success: true });
});

export default router;
