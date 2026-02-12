import {useAuth, useUser} from '@clerk/clerk-react';
import {useEffect, useState} from 'react';

export function useClerkRole() {
  const { user } = useUser();
  const { getToken } = useAuth();


  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function load() {
      try {
        const token = await getToken();


        const res = await fetch('/api/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        const data = await res.json();
        setRole(data.role);
      } catch (e) {
        setRole(null);
      } finally {
        setLoading(false);
      }
    }


    if (user) load();
  }, [user]);


  return { role, loading };
}