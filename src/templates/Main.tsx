import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [navbar, setNavbar] = useState(false);

  const callN8N = async (email: string) => {
    const url = '/api/n8n';
    const username = 'bounce';
    const password = 'bounce';

    const headers = new Headers();
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
    // headers.set('Origin', 'http://localhost:3000');
    // headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.set('Access-Control-Allow-Credentials', 'true');
    // headers.set('mode', 'no-cors');

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          email,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <header></header>

        <nav className="w-full bg-gray-800 shadow">
          <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
            <div>
              <div className="flex items-center justify-between py-3 md:block md:py-5">
                <a href="#">
                  <h2 className="text-2xl font-bold text-white">
                    Bounce Circular
                  </h2>
                </a>
                <div className="md:hidden">
                  <button
                    className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li className="text-white">
                    <Link href="/about">About US</Link>
                  </li>
                  <li className="text-white">
                    <button
                      onClick={() => callN8N('maxime.sohet.ms@gmail.com')}
                    >
                      Make API Call
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <main className="content py-5 text-xl">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
          <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { Main };
