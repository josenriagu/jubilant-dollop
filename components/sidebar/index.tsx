import * as React from "react";
import { View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { PanelRightOpen, Zap } from "~/lib/icons";

export default function Sidebar(props: {
  toggleSidebar: () => void;
  connect: () => void;
}) {
  const { toggleSidebar, connect } = props;

  const commonCardStyle = "border-0 boxShadow-none bg-transparent";
  const commonTextStyle = "text-sm font-semibold text-muted-foreground";
  return (
    <View className="absolute top-0 left-0 h-full w-full">
      <Card className="flex flex-row justify-between items-start h-full w-full max-w-lg p-2 rounded-none gap-2 border-0">
        <Card className="flex flex-row justify-between items-center w-full p-4 rounded-none border-0 boxShadow-none border-b">
          <Card className={commonCardStyle + "flex flex-row gap-2"}>
            <Avatar alt="Guest's Avatar" className="w-12 h-12">
              <AvatarImage
                source={{ uri: "https://raw.githubusercontent.com/AKASHAorg/akasha-core/refs/heads/next/libs/design-system-core/src/static/img/avatar-1-min.webp" }}
              />
              <AvatarFallback>
                <Text>GU</Text>
              </AvatarFallback>
            </Avatar>
            <Card className={commonCardStyle + "gap-1"}>
              <Text className="font-bold">Guest</Text>
              <Text className={commonTextStyle}>Connect to see</Text>
              <Text className={commonTextStyle}>member-only features.</Text>
            </Card>
          </Card>
          <Card className={commonCardStyle + "flex flex-row gap-2"}>
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center items-center h-10 w-10 rounded-full"
              onPress={connect}
            >
              <Zap
                size={16}
                strokeWidth={2.5}
                className="w-10 h-10 text-secondary"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center items-center h-10 w-10 rounded-full"
              onPress={toggleSidebar}
            >
              <PanelRightOpen
                size={16}
                strokeWidth={2.5}
                className="w-10 h-10 text-secondary"
              />
            </Button>
          </Card>
        </Card>
      </Card>
    </View>
  );
}
