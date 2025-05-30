import * as React from "react";
import { ScrollView, View } from "react-native";
import { Href, useRouter } from "expo-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import {
  AudioWaveform,
  BellDot,
  Blocks,
  PanelRightOpen,
  SatelliteDish,
  Search,
  Settings,
  Zap,
} from "~/lib/icons";
import { ListMenuItem } from "./list-menu-items";

type SidebarItem = {
  label: string;
  value?: string;
  route: Href;
  icon: React.ReactElement;
  content?: { label: string }[];
};

export default function Sidebar(props: { toggleSidebar: () => void }) {
  const { toggleSidebar } = props;
  const router = useRouter();

  const commonCardStyle = "border-0 boxShadow-none bg-transparent";
  const commonTextStyle = "text-sm font-semibold text-muted-foreground";

  const appsWithSubMenu: SidebarItem[] = [
    {
      label: "Antenna",
      value: "antenna",
      route: "/antenna",
      icon: (
        <SatelliteDish
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
      content: [
        {
          label: "Global Antenna",
        },
        {
          label: "My Antenna",
        },
      ],
    },
    {
      label: "Extensions",
      value: "extensions",
      route: "/extensions",
      icon: (
        <Blocks
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
      content: [
        {
          label: "Explore",
        },
        {
          label: "Installed Extensions",
        },
      ],
    },
    {
      label: "Vibes",
      value: "vibes",
      route: "/vibes",
      icon: (
        <AudioWaveform
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
      content: [
        {
          label: "Overview",
        },
        {
          label: "Moderators",
        },
        {
          label: "Transparency Log",
        },
      ],
    },
  ];

  const otherApps: SidebarItem[] = [
    {
      label: "Search",
      route: "/search",
      icon: (
        <Search
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
    },
    {
      label: "Notifications",
      route: "/notifications",
      icon: (
        <BellDot
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
    },
    {
      label: "Settings",
      route: "/settings",
      icon: (
        <Settings
          size={16}
          strokeWidth={2.5}
          className="w-10 h-10 text-secondary"
        />
      ),
    },
  ];

  return (
    <View className="absolute top-0 left-0 h-full w-full">
      <Card className="flex items-start h-full w-full max-w-lg p-2 rounded-none gap-2 border-0">
        <Card className="flex flex-row justify-between items-center w-full p-4 rounded-none boxShadow-none border-0 border-b">
          <Card className={`${commonCardStyle} flex flex-row gap-2`}>
            <Avatar alt="Guest's Avatar" className="w-12 h-12">
              <AvatarImage
                source={{
                  uri: "https://raw.githubusercontent.com/AKASHAorg/akasha-core/refs/heads/next/libs/design-system-core/src/static/img/avatar-1-min.webp",
                }}
              />
              <AvatarFallback>
                <Text>GU</Text>
              </AvatarFallback>
            </Avatar>
            <Card className={`${commonCardStyle} gap-1`}>
              <Text className="text-lg font-bold">Guest</Text>
              <Text className={commonTextStyle}>Connect to see</Text>
              <Text className={commonTextStyle}>member-only features.</Text>
            </Card>
          </Card>
          <Card className={`${commonCardStyle} flex flex-row gap-2`}>
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center items-center h-12 w-12 rounded-full"
              onPress={() => {
                router.navigate("/");
                toggleSidebar();
              }}
            >
              <Zap
                size={16}
                strokeWidth={2.5}
                className="w-14 h-14 text-secondary"
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="flex justify-center items-center h-12 w-12 rounded-full"
              onPress={toggleSidebar}
            >
              <PanelRightOpen
                size={16}
                strokeWidth={2.5}
                className="w-14 h-14 text-secondary"
              />
            </Button>
          </Card>
        </Card>
        <ScrollView className="w-full">
          <Accordion
            type="multiple"
            collapsible
            defaultValue={["item-1"]}
            className="w-full mr-8 max-w-sm native:max-w-md"
          >
            {appsWithSubMenu.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value ?? ""}
                className="border-0"
              >
                <AccordionTrigger>
                  <ListMenuItem
                    icon={item.icon}
                    label={item.label}
                    margin="ml-4"
                  />
                </AccordionTrigger>
                <AccordionContent className="ml-10">
                  {item.content?.map((contentItem, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="flex w-full items-start pl-10 py-4 rounded-none border-0 boxShadow-0 border-l-4"
                      onPress={() => router.navigate(item.route)}
                    >
                      <Text key={index}>{contentItem.label}</Text>
                    </Button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Card className={`${commonCardStyle} w-full gap-8 mt-2 pl-0`}>
            {otherApps.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex w-full items-start"
                onPress={() => router.navigate(item.route)}
              >
                <ListMenuItem key={index} icon={item.icon} label={item.label} />
              </Button>
            ))}
          </Card>
        </ScrollView>
      </Card>
    </View>
  );
}
