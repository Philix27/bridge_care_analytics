import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Bridge Care Analytics</title>
        <meta name="Bridge Care Analytics" content="Created by Felix Eligbue" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* <LandingNavBar /> */}
      {props.children}
    </>
  );
}
