import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = ({ Component, pageProps }: AppProps) => {
  const [serverSideRendering, setServerSideRendering] = useState(true);
  useEffect(() => {
    setServerSideRendering(false);
  }, []);
  if (serverSideRendering) return null;

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <div className="xl:w-[1200px] mx-auto overflow-hidden h-[100vh]">
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
            <Sidebar />
          </div>
          <div className="my-4 flex flex-col video gap-10 overflow-auto h-[88vh] flex1">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};
export default App;
