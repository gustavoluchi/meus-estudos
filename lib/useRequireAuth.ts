import {useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

function useRequireAuth() {
  const {data: session, status} = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/`);
    }
  }, [router, status]);

  return {session, status};
}

export default useRequireAuth;
