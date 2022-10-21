import {SecondHalfNavbar} from 'modules/structure/SecondHalfNavbar';

export const NavBar = () => {
  return (
    <div className="flex justify-between navbar shrink-0 grow">
      <div className="flex-col flex w-[200%] items-start md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
          Meus Estudos
        </h1>
        <h4 className="mt-5 ml-4 text-lg text-left">
          Aprenda e estude com profissionais.
        </h4>
      </div>
      <SecondHalfNavbar />
    </div>
  );
};
{
  /* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */
}
