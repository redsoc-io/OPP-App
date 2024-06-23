import { View, Text, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProxyItem({ data }) {
  return (
    <View className="mb-2 bg-gray-100 rounded-md p-2">
      <View className="flex-row p-2 justify-between items-center">
        <View className="">
          <Text className="text-gray-900 font-bold uppercase text-xl">
            {data.geo}
          </Text>
        </View>
        <View className="bg-blue-500 rounded-md">
          <Text className="text-white px-3 py-1 font-bold uppercase">
            {data.url.split(":")[0]}
          </Text>
        </View>
      </View>
      <View className="p-2 flex-row items-center justify-between">
        <View className="bg-gray-200 py-2 grow p-2 rounded-l-md">
          <Text className="font-bold">{data.url}</Text>
        </View>
        <View>
          <TouchableOpacity
            className="bg-blue-500 px-4 py-2 flex items-center justfy-center rounded-r-md"
            activeOpacity={0.8}
          >
            <Icon name="copy" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row p-2 justify-between">
        <View className="rounded-md flex-row items-center justify-center">
          <Text className="text-blue-500 px-1 py-1 font-bold uppercase flex flex-row">
            <Icon name="star" size={14} />
            <Text className="ml-1">&nbsp;{data.streak}</Text>
          </Text>
        </View>
        <View className="rounded-md flex-row items-center justify-center">
          <Text className="text-green-500 px-1 py-1 font-bold uppercase flex flex-row">
            <Icon name="refresh" size={14} />
            <Text className="ml-1">&nbsp;{data.response_time}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
