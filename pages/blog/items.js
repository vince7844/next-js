import React from 'react';
import { Layout } from '../../components/layout';
import Head from 'next/head'; // Head like <head></head> in HTML

const Items = () => (
  <> 
    <Head>
      <title>Items</title>
    </Head>
    <Layout>
      <h1>Items</h1>
      <ul>
        <h2>Liste des catégories</h2>
        <li>Culture</li>
        <li>Géographie</li>
        <li>Social</li>
        <li>Economique</li>
      </ul>
    </Layout>
  </>
);

export default Items;