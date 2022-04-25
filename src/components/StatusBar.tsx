import React from "react";
import { StatusBar as ExpoStatusBar } from "react-native";

const StatusBar = ({ color }: { color?: string }) => {
  return <ExpoStatusBar translucent backgroundColor={color || "transparent"} />;
};

export default StatusBar;
