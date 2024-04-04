import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PizzaList from "../components/pizzalist";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Outlet Kolkata</title>
        <meta name="description" content="Your one stop solution to pizza cravings!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  );
}