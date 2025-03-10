import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain="polygon"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp; 
