import styles from '../../styles/Ninjas.module.scss';
import Link from 'next/link';

export const getStaticProps = async () => {
  let data;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await res.json();
  } catch (err) {
    if (err) {
      return;
    }
  }

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div className='page'>
      <h1>Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>{ninja.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
