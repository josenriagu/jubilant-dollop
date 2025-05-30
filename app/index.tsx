import * as React from "react";
import "@walletconnect/react-native-compat";
import {
  createAppKit,
  defaultConfig,
  AppKit,
} from "@reown/appkit-ethers-react-native";
import Authentication from "~/components/authentication";

const projectId = process.env.PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

const metadata = {
  name: "Authentication | Akasha",
  description: "Sample Expo Project",
  url: "https://next.akasha-world-framework.pages.dev",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
  redirect: {
    native: "exp://",
  },
};

const config = defaultConfig({ metadata });

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "POL",
  explorerUrl: "https://polygonscan.com",
  rpcUrl: "https://polygon-rpc.com",
};

const chains = [mainnet, polygon];

createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true,
});

export default function Screen() {
  return (
    <>
      <AppKit />
      <Authentication />
    </>
  );
}
