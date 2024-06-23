import { ScrollView, View } from "react-native";

export default function ScreenWrapper({ children }) {
  return (
    <ScrollView className="bg-gray-100 pt-12 px-1 pb-6 shadow-sm">
      <View className="mt-12"></View>
      <View className="">{children}</View>
      <View className="mt-12"></View>
    </ScrollView>
  );
}
