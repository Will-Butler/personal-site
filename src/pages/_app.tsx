import "@/styles/globals.css";
import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import { Analytics } from "@vercel/analytics/react"

function App({Component, pageProps}: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : 
      <>
        <Component {...pageProps}/> 
        <Analytics /> 
      </>
      }
    </div>
  );
}
export default App;
