import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Nottie </title>
        <meta name="apcsituationroom" content="Created by Hexelan" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* <LandingNavBar /> */}
      {props.children}
    </>
  );
}
