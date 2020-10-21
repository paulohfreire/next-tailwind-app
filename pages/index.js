import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Teste</title>
      </Head>
      <main>
        <nav className='font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full'>
          <Link href='/'>MyApp</Link>
          <div>
            <a
              href='/'
              className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
            >
              Serviços
            </a>
            <a
              href='/'
              className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
            >
              Sobre
            </a>
            <a
              href='/'
              className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2'
            >
              Contato
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
}
