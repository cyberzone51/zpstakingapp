import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
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