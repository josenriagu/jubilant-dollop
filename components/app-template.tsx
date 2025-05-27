import * as React from "react";
import { View } from "react-native";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";

export const AppTemplate = (props: { title: string }) => {
  const { title } = props;
  return (
    <>
      <View className="flex-1 items-center gap-5 p-2">
        <Card className="w-full max-w-lg p-2 rounded-2xl">
          <CardHeader className="items-center">
            <CardTitle className="pb-2 text-center">{title}</CardTitle>
          </CardHeader>
        </Card>
      </View>
    </>
  );
};
