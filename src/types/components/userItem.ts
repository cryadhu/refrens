import { StyleProp, ViewStyle } from "react-native";

export type UserItemProps = {
  name: string;
  left: number;
  top: number;
  selected: boolean;
  index: number;
  onSelectUser: (index: number) => void;
  style?: StyleProp<ViewStyle>;
};
