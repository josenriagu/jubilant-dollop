import * as React from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Text } from "~/components/ui/text";

export const ListMenuItem = (props: {
  icon: React.ReactElement;
  label: string;
  margin?: string;
}) => {
  const { icon, label, margin } = props;
  return (
    <Card
      className={`flex flex-row items-center gap-4 rounded-none border-0 boxShadow-none bg-transparent" ${margin}`}
    >
      <Button
        variant="outline"
        size="icon"
        className="flex justify-center items-center h-12 w-12 rounded-full"
        // onPress={connect}
      >
        {icon}
      </Button>
      <Text className="text-lg font-semibold">{label}</Text>
    </Card>
  );
};
