import {createClerkClient} from '@clerk/clerk-sdk-node';

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export async function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const session = await clerk.verifyToken(token);
    req.clerkUserId = session.sub;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}
