import Head from 'next/head';
import Header from '../components/Header';
import MapInfo from '../components/MapInfo';
import Table from '../components/Table';
import { useMemo, useState, useEffect } from 'react';

export default function Home({ overviewData, tableData }) {
  console.log(tableData);

  const columns = useMemo(() => [
    {
      Header: 'Country or region',
      accessor: 'country',
    },
    {
      Header: 'Total cases',
      accessor: 'cases',
    },
    {
      Header: 'New cases',
      accessor: 'todayCases',
    },
    {
      Header: 'Total deaths',
      accessor: 'deaths',
    },
    {
      Header: 'New deaths',
      accessor: 'todayDeaths',
    },
    {
      Header: 'Total recovered',
      accessor: 'recovered',
    },
    {
      Header: 'New recoveries',
      accessor: 'todayRecovered',
    },
    {
      Header: 'Total tests',
      accessor: 'tests',
    },
    {
      Header: 'Tests/1m pop',
      accessor: 'testsPerOneMillion',
    },
    {
      Header: 'Population',
      accessor: 'population',
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
        <MapInfo />
        <Table columns={columns} data={tableData} />

        {/* <footer>
          <p>Made by Ahmad Ihsan</p>
        </footer> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const overviewRes = await fetch('https://disease.sh/v3/covid-19/all');
  const overviewData = await overviewRes.json();

  const tableRes = await fetch('https://disease.sh/v3/covid-19/countries');
  const tableData = await tableRes.json();

  return {
    props: {
      overviewData,
      tableData,
    },
  };
}
