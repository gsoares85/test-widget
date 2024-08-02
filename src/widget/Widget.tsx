import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'Rootstock Widget',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia, polygon, optimism, arbitrum, base],
  ssr: false,
});

const queryClient = new QueryClient();

export const Widget = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <>
            <h3>Rootstock Widget</h3>
            <ConnectButton />
          </>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};