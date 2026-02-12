import express from 'express';
import prisma from '../../prisma/prisma.js';
import {authMiddleware} from './middleware.js';

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { clerkUserId: req.clerkUserId },
  });

  res.json(user);
});

export default router;
