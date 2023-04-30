import { type AppType } from "next/app";
import "../styles/index.scss";
import Layout from "../comps/global/Layout";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
