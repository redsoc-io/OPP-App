import { View, Text, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
const lookup = require("country-code-lookup");

export default function ProxyItem({ data }) {
  var country = null;
  var flag = null;

  try {
    country = lookup.byIso(data.geo).country;
  } catch (e) {
    console.log(e);
  }

  try {
    flag = country ? getUnicodeFlagIcon(data.geo) : data.geo;
  } catch (e) {
    console.log(e);
  }

  return (
    <View className="bg-gray-700 rounded-md p-2 mb-4 shadow-lg">
      <View className="flex-row p-2 justify-between items-center">
        <View className="">
          <Text className="text-white font-normal uppercase text-lg">
            {flag} {country || data.geo || "Unknown"}
          </Text>
        </View>
        <View className="py-1 bg-gray-800 rounded-md">
          <Text className="text-white px-3 font-bold uppercase">
            {data.url.split(":")[0]}
          </Text>
        </View>
      </View>
      <View className="p-2 flex-row items-center justify-between">
        <View className="bg-gray-600 py-2 grow p-2 rounded-l-md h-9">
          <Text className="font-bold text-white">{data.url}</Text>
        </View>
        <View>
          <TouchableOpacity
            className="bg-blue-500 px-4 flex items-center justfy-center rounded-r-md h-9 py-2"
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
            <Icon name="bar-chart" size={14} />
            <Text className="ml-1">&nbsp;{data.response_time}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
