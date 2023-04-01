import Loader from '@/components/Loader';
import {signIn, useSession} from 'next-auth/react';
import router from 'next/router';
import {FC, ReactElement, useEffect} from 'react';

export const WithAuth: FC<{children: ReactElement; options: any}> = ({children, options}) => {
  const {data: session, status} = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    // Do nothing while loading
    if (status === 'loading') {
      return;
    }

    // If not authenticated, redirect to provided url or
    if (!isUser) {
      if (options?.redirectTo) {
        router.push(options.redirectTo);
      } else {
        signIn();
      }
    }
  }, [isUser, options.redirectTo, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="h-screen w-screen flex flex-col justify-center content-center items-center">
      <Loader className="h-6 w-6" />
    </div>
  );
};

export default WithAuth;
