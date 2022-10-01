import {signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import {toast} from 'react-toastify';
import GithubLoginButton from './GithubLoginButton';

export default function NavbarAvatar() {
  const {data: session, status} = useSession();

  if (status === 'unauthenticated') return <GithubLoginButton />;

  return (
    <div className="min-h-full flex items-end">
      <div className="dropdown dropdown-end">
        <div className="avatar"></div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 mask mask-squircle">
            {status === 'loading' ? (
              <>carregando</>
            ) : (
              <Image
                src={session?.user?.image ?? ''} //TODO: por uma imagem de fallback
                width="40"
                height="40"
                alt="foto do joe"
              />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a
              className="justify-between"
              onClick={() => {
                toast('aeee', {type: 'info'});
              }}
            >
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
