import {useEffect} from 'react';
import {useAuth} from '@clerk/clerk-react';
import {useNavigate} from 'react-router-dom';

export function useFirstLoginGate() {
  const { getToken } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    async function check() {
      const token = await getToken();


      const res = await fetch('/api/security/gate', {
        headers: { Authorization: `Bearer ${token}` },
      });


      const data = await res.json();


      if (data.forcePassword) {
        navigate('/reset-password');
        return;
      }


      if (data.forceProfile) {
        navigate('/complete-profile');
      }
    }


    check();
  }, []);
}