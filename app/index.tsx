import * as React from "react";
import { View } from "react-native";
import { useColorScheme } from "~/lib/useColorScheme";
import {
  ChevronLeft,
  PanelLeftOpen,
  PanelRightOpen,
  WalletConnect,
} from "~/lib/icons";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Image } from "~/components/ui/image";

export default function Screen() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const { isDarkColorScheme } = useColorScheme();

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <View className="flex-1 items-center gap-5 p-2">
      <Card className="flex flex-row justify-between items-center w-full max-w-lg px-2 rounded-2xl gap-2">
        <Card className="flex flex-row gap-2 border-0 boxShadow-none bg-transparent">
          <Button
            variant="outline"
            size="icon"
            className="flex justify-center items-center h-10 w-10 rounded-full"
            onPress={handleToggleSidebar}
          >
            {isSidebarOpen ? (
              <PanelRightOpen
                size={16}
                strokeWidth={2.5}
                className="w-10 h-10 text-secondary"
              />
            ) : (
              <PanelLeftOpen
                size={16}
                strokeWidth={2.5}
                className="w-10 h-10 text-secondary"
              />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="flex justify-center items-center h-10 w-10 rounded-full"
          >
            <ChevronLeft
              size={16}
              strokeWidth={2.5}
              className="w-10 h-10 text-secondary"
            />
          </Button>
        </Card>
        <Card className="flex h-fit w-fit gap p-0 border-0 boxShadow-none bg-transparent">
          {isDarkColorScheme ? (
            <Image
              src={require("../assets/images/small.png")}
              alt="akasha logo"
              style={{ width: 15, height: 15, margin: "auto" }}
            />
          ) : (
            <Image
              src={require("../assets/images/small_dark.png")}
              alt="akasha logo"
              style={{ width: 15, height: 15, margin: "auto" }}
            />
          )}
          <Card className="px-2 py-0 mt-[1.75] border-0 boxShadow-0 bg-destructive rounded-full">
            <Text className="text-sm text-white">Alpha</Text>
          </Card>
        </Card>
        <Card className="flex h-16 w-24 border-0 boxShadow-0 bg-transparent" />
      </Card>
      <Card className="w-full max-w-lg p-2 rounded-2xl">
        <CardHeader className="items-center">
          <CardTitle className="pb-2 text-center">
            ✨ Welcome to AKASHA World ✨
          </CardTitle>
        </CardHeader>

        <Image
          src={require("../assets/images/auth.webp")}
          alt="connect provider"
          style={{ width: 176, height: 176, margin: "auto" }}
        />

        <CardContent className="gap-2 mt-2">
          <Text className="text-sm text-muted-foreground">
            Connect your wallet
          </Text>
          <Card className="flex items-start w-full mt-[1.5] p-2">
            <Button
              variant="ghost"
              className="flex flex-row justify-start w-full gap-2 p-0"
              onPress={() => {
                console.log("Connect Wallet");
              }}
            >
              <WalletConnect />
              <Card className="border-0 boxShadow-none bg-transparent gap-[2.5]">
                <Text className="font-bold">Web3Modal</Text>
                <Card className="border-0 boxShadow-none bg-transparent gap-0">
                  <CardDescription className="font-semibold text-muted-foreground">
                    Connect your wallet using MetaMask,
                  </CardDescription>
                  <CardDescription className="font-semibold text-muted-foreground">
                    WalletConnect, Coinbase etc ...
                  </CardDescription>
                </Card>
              </Card>
            </Button>
          </Card>
        </CardContent>
        <CardFooter className="flex-col gap-3 pb-0">
          <Text className="font-semibold text-sm text-secondary">
            Powered by Web3Modal
          </Text>
        </CardFooter>
      </Card>
    </View>
  );
}
