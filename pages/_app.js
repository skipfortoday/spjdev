import "../styles/globals.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange("cupcake");
    // 👆 false parameter is required for react project
  }, []);
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <html data-theme="cupcake">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </html>
  );
}

export default MyApp;
