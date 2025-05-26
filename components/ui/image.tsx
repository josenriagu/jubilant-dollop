import React from "react";
import { Image as RNImage, ImageStyle, StyleProp } from "react-native";

export type ImageProps = {
  src: number | string;
  alt?: string;
  className?: StyleProp<ImageStyle>;
  [key: string]: any;
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <RNImage
      source={typeof src === "number" ? src : { uri: src }}
      alt={alt}
      style={className}
      {...props}
    />
  );
};
