import Head from 'next/head';
import Header from '../src/components/Header';
import Table from '../src/components/Table';
import { useMemo, useState, useContext, useEffect } from 'react';
import { AppContext } from '../src/context/state';
import axios from 'axios';

export default function Home({ overviewData }) {
  const [state, setState] = useContext(AppContext);
  const { timeFrame } = state;
  const [tableData, setTableData] = useState([]);
  const baseUrl = 'https://disease.sh/v3/covid-19';

  const getTableData = async () => {
    try {
      let tableRes;
      if (timeFrame === 'today') {
        tableRes = await axios.get(`${baseUrl}/countries`);
      } else if (timeFrame === 'yesterday') {
        tableRes = await axios.get(`${baseUrl}/countries?yesterday=true`);
      } else {
        tableRes = await axios.get(`${baseUrl}/countries?twoDaysAgo=true`);
      }
      const tableData = await tableRes.data;
      console.log(tableData);
      setTableData(tableData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTableData();
  }, [timeFrame]);

  const columns = useMemo(() => [
    {
      Header: 'Country',
      accessor: 'country',
    },
    {
      Header: 'Total cases',
      accessor: 'cases',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'New cases',
      accessor: 'todayCases',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'Total deaths',
      accessor: 'deaths',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'New deaths',
      accessor: 'todayDeaths',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'Total recovered',
      accessor: 'recovered',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'New recoveries',
      accessor: 'todayRecovered',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'Total tests',
      accessor: 'tests',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'Tests/1m pop',
      accessor: 'testsPerOneMillion',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
    {
      Header: 'Population',
      accessor: 'population',
      Cell: ({ cell: { value } }) => {
        return <>{value.toLocaleString()}</>;
      },
    },
  ]);

  return (
    <div>
      <Head>
        <title>Covid-19 Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header data={overviewData} />
        {/* <MapInfo /> */}
        <Table columns={columns} data={tableData} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl = 'https://disease.sh/v3/covid-19';

  const overviewRes = await fetch(`${baseUrl}/all`);
  const overviewData = await overviewRes.json();

  return {
    props: {
      overviewData,
    },
  };
}
