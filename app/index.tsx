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
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { Image } from "~/components/ui/image";

export default function Screen() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const { isDarkColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center gap-5 p-2">
      <Card className="flex flex-row justify-between items-center w-full max-w-lg px-2 rounded-2xl gap-2">
        <Card className="flex flex-row border-0 boxShadow-none gap-2">
          <Button
            variant="outline"
            size="icon"
            className="flex justify-center items-center h-10 w-10 rounded-full"
          >
            {isSidebarOpen ? (
              <PanelLeftOpen
                size={16}
                strokeWidth={2.5}
                className="w-10 h-10 text-secondary"
              />
            ) : (
              <PanelRightOpen
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
        <Card className="flex h-fit w-fit gap p-0 border-0 boxShadow-0">
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
          style={{ width: 200, height: 200, margin: "auto" }}
        />

        <CardContent className="gap-2 mt-2">
          <Text className="text-sm text-muted-foreground">
            Connect your wallet
          </Text>
          <Card className="flex items-start w-full mt-2 p-2">
            <Button
              variant="ghost"
              className="flex flex-row  gap-2 p-0"
              onPress={() => {
                console.log("Connect Wallet");
              }}
            >
              <WalletConnect />
              <Card className="border-0 boxShadow-none bg-transparent">
                <Text>Web3Modal</Text>
                <Text className="text-sm text-muted-foreground">
                  Connect your wallet
                </Text>
              </Card>
            </Button>
          </Card>
        </CardContent>
        <CardFooter className="flex-col gap-3 pb-0">
          <Text className="text-sm text-secondary">Powered by Web3Modal</Text>
        </CardFooter>
      </Card>
    </View>
  );
}
