import {SignIn} from '@clerk/clerk-react';
import {motion} from 'framer-motion';

export default function LoginPage() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="shadow-2xl rounded-2xl"
        >
          <SignIn
              appearance={{ elements: { card: 'rounded-2xl' } }}
              routing="path"
              path="/login"
              afterSignInUrl="/admin"
          />
        </motion.div>
      </div>
  );
}