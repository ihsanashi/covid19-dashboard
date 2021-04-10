import Head from 'next/head';
import Header from '../components/Header';
import MapInfo from '../components/MapInfo';
import TableIntro from '../components/TableIntro';

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Covid-19 Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header data={data} />
        <MapInfo />
        <TableIntro />

        {/* <footer>
          <p>Made by Ahmad Ihsan</p>
        </footer> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://disease.sh/v3/covid-19/all');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
