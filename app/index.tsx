import "@walletconnect/react-native-compat";
import * as React from "react";
import {
  createAppKit,
  defaultConfig,
  AppKit,
} from "@reown/appkit-ethers-react-native";
import Authentication from "~/components/authentication";
import { chains, metadata } from "~/lib/constants";

const projectId = process.env.PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

const config = defaultConfig({ metadata });

createAppKit({
  projectId,
  chains,
  config,
  enableAnalytics: true,
});

export default function Screen() {
  return (
    <>
      <Authentication />
      <AppKit />
    </>
  );
}
