import { View, Text } from "react-native";

export default function ProxyItemDummy() {
  return (
    <View className="p-2 bg-gray-700 mb-2 rounded-md">
      <View className="flex flex-row gap-2 mb-2">
        <View className="bg-gray-600 w-5 h-8 rounded-md"></View>
        <View className="bg-gray-600 grow h-8 rounded-md"></View>
        <View className="bg-gray-600 w-5 h-8 rounded-md"></View>
      </View>
      <View className="flex flex-row mb-2">
        <View className="bg-gray-600 w-full h-8 rounded-md"></View>
      </View>
      <View className="flex flex-row justify-between">
        <View className="bg-gray-600 w-1/4 h-8 rounded-md"></View>
        <View className="bg-gray-600 w-1/4 h-8 rounded-md"></View>
      </View>
    </View>
  );
}
