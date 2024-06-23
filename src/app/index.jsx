import { Text, View, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { useQuery } from "@tanstack/react-query";
import ProxyItem from "../components/ProxyItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from 'expo-status-bar';

export default function index() {
  const { isLoading, isRefetching, error, data, refetch } = useQuery({
    queryKey: ["proxies"],
    queryFn: async () => {
      const response = await fetch("https://opp.redsoc.in/api/servers");
      return response.json();
    },
  });

  return (
    <ScreenWrapper>
      {(isLoading || isRefetching) && (
        <View className="w-full absolute -top-8">
          <View className="bg-black/50 z-50 p-3 w-11/12 mx-auto rounded-md">
            <Text className="font-bold text-white">
              {isLoading ? "Loading..." : "Refreshing..."}
            </Text>
          </View>
        </View>
      )}
      <View className="bg-gray-800 rounded-3xl p-5">
        <View className="flex justify-between items-center flex-row mb-4">
          <View className="">
            <Text className="font-black text-white tracking-wide text-2xl">
              Latest Proxies
            </Text>
          </View>
          <View className="">
            <TouchableOpacity className="" onPress={refetch}>
              <Icon name="refresh" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View >
          {error && <Text>Error: {error.message}</Text>}
          {data && (
            <View className="">
              {data.map((proxy) => (
                <ProxyItem data={proxy} key={`${proxy.url}-proxy-item`} />
              ))}
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
