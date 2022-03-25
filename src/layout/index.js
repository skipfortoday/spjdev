import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center drawer-content">
        <div className="navbar mb-2 shadow-lg bg-neutral  min-w-full">
          <div className="flex-none text-neutral-content ">
            <label
              for="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden drawer-button text-neutral-content "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold text-neutral-content ">
              {router?.route}
            </span>
          </div>
          <div className="flex-none dropdown dropdown-left">
            <Link href="/">
              <button className="btn btn-square btn-ghost" tabindex="0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current text-neutral-content "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
                {/* <ul
                tabindex="0"
                className="p-2 shadow menu dropdown-content rounded-box w-52 bg-base-100"
              >
                <li>
                  <a>Ganti Password</a>
                </li>
                <li>
                  <Link href="/">
                    <a>Logout</a>
                  </Link>
                </li>
              </ul> */}
              </button>
            </Link>
          </div>
        </div>

        {children}

        <footer className="p-2 footer bg-primary text-primary-content footer-center fixed bottom-0">
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              className="inline-block fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
          </div>
        </footer>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link href="/puskesmas">
              <a>Puskesmas </a>
            </Link>
          </li>
          <li>
            <Link href="/validator">
              <a>Validator</a>
            </Link>
          </li>
          <li>
            <Link href="/accounting">
              <a>Accounting</a>
            </Link>
          </li>
          <li>
            <Link href="/source">
              <a>Sumber Dana</a>
            </Link>
          </li>
          <li>
            <Link href="/category">
              <a>Kategori</a>
            </Link>
          </li>
          <li>
            <Link href="/items">
              <a>Item</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
