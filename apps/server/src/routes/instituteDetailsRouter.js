import {Router} from 'express';
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const router = Router();

// GET /api/events
router.get('/', async (_req, res, next) => {
    try {

        const institute = await prisma.instituteProfile.findMany();
        res.json(institute);
    } catch (err) {
        next(err);
    }
});
export default router;
