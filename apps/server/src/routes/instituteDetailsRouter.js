import {Router} from 'express';
import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const router = Router();

// GET /api/events
router.get('/', async (_req, res, next) => {
    try {

        const instituteId = "cmkvi1ngp00018mf7b3heldu2"; // hard-coded for now

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
                shortName: true,
                aboutInstitute: true,
                aboutUs: true,
                history: true,
                mission: true,
                vision: true,
                principalMessage: true,
                principalPhoto: true,

                addressLine1: true,
                addressLine2: true,

                pincode: true,

                contact: true,
                emailID: true,

                state: {
                    select: {
                        id: true,
                        name: true,        // ✅ State name
                    },
                },

                city:{
                  select: {
                      id: true,
                      name: true
                  }
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
