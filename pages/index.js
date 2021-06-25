import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className='page'>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quod
          eligendi quo corrupti porro ex qui quia, reiciendis saepe esse
          blanditiis itaque dolorum, omnis facere doloremque ducimus culpa?
          Repudiandae, facilis.
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quod
          eligendi quo corrupti porro ex qui quia, reiciendis saepe esse
          blanditiis itaque dolorum, omnis facere doloremque ducimus culpa?
          Repudiandae, facilis.
        </p>

        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
