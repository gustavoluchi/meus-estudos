import ActiveLink from '@/components/NavBar/NavLink';
import {signOut, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import GithubLoginButton from './GithubLoginButton';

export default function NavbarAvatar() {
  const {data: session, status} = useSession();
  const {pathname} = useRouter();
  if (status === 'unauthenticated') return <GithubLoginButton />;

  return (
    <div className="flex items-end min-h-full">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          {status === 'loading' ? (
            <div className="avatar placeholder">
              <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                <span className="text-xs">...</span>
              </div>
            </div>
          ) : (
            <>
              {session?.user.image ? (
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={session?.user?.image ?? ''} //TODO: por uma imagem de fallback
                      alt="seu avatar"
                    />
                  </div>
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                    <p className="text-2xl">{session?.user?.username?.substring(0, 3) ?? ''}</p>
                  </div>
                </div>
              )}
            </>
          )}
        </label>
        <ul
          tabIndex={0}
          className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          {pathname !== '/' && (
            <li>
              <ActiveLink className="justify-between" href="/painel/textos/novo">
                Novo texto
              </ActiveLink>
            </li>
          )}
          <li>
            <ActiveLink className="justify-between" href="/meus-textos">
              Meus textos
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className="justify-between" href="/minha-conta">
              Minha conta
            </ActiveLink>
          </li>
          <li>
            <button type="button" onClick={() => signOut()}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
