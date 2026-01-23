import {Router} from 'express';
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const router = Router();

// GET /api/events
router.get('/', async (_req, res, next) => {
    try {

        const instituteId = "cmkmhzws70001t72p34b9a80u"; // hard-coded for now

        const institute = await prisma.instituteProfile.findUnique({
            where: {
                id: instituteId,
            },
            select: {
                id: true,
                instituteCode: true,
                name: true,
                logo: true,
                instituteHeroImage: true,
                yearOfEstb: true,

                aboutInstitute: true,
                history: true,
                mission: true,
                vision: true,
                principalMessage: true,
                principalPhoto: true,

                addressLine1: true,
                addressLine2: true,
                city: true,
                pincode: true,

                contact: true,
                emailID: true,

                state: {
                    select: {
                        id: true,
                        name: true,        // ✅ State name
                    },
                },

                district: {
                    select: {
                        id: true,
                        name: true,        // ✅ District name
                    },
                },
            },
        });



        res.json(institute);
    } catch (err) {
        next(err);
    }
});
export default router;
