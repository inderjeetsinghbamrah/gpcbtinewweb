import express from 'express';
import prisma from '../../prisma/prisma.js';
import {authMiddleware} from './middleware.js';

const router = express.Router();

router.get("/gate", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { clerkUserId: req.clerkUserId },
    include: { userSecurity: true },
  });

  await prisma.userSession.create({
    data: {
      userId: user.id,
      ipAddress: req.ip,
    },
  });

  res.json({
    forcePassword: user.userSecurity?.forcePassword ?? true,
    forceProfile: user.userSecurity?.forceProfile ?? true,
  });
});

export default router;
