import { Text, View, TouchableOpacity, TextInput } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { useQuery } from "@tanstack/react-query";
import ProxyItem from "../components/ProxyItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import ProxyItemDummy from "../components/ProxyItemDummy";
import { useEffect, useState } from "react";

export default function index() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [query, setQuery] = useState("");

  const { isLoading, isRefetching, error, data, refetch } = useQuery({
    queryKey: ["proxies"],
    queryFn: async () => {
      const response = await fetch("https://opp.redsoc.in/api/servers");
      return response.json();
    },
  });

  const auto_refresh = async () => {
    await refetch();
    setTimeout(auto_refresh, 10000);
  };

  const auto_clock = () => {
    setCurrentTime(new Date());
    setTimeout(auto_clock, 1000);
  };

  useEffect(() => {
    auto_refresh();
    auto_clock();
  }, []);

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
      <View className="my-3">
        <TextInput
          value={query}
          onChangeText={(q) => {
            setQuery(q);
          }}
          placeholder={`Search ${(data || []).length} Proxies`}
          className="bg-gray-500 rounded-2xl p-3 text-white"
        />
      </View>
      <View className="bg-gray-800 rounded-3xl p-5">
        <View className="flex justify-between items-center flex-row mb-4">
          <View className="">
            <Text
              style={{
                fontFamily: "Inter-Bold",
              }}
              className="font-black text-white tracking-wide text-2xl"
            >
              Latest Proxies
            </Text>
          </View>
          <View className="">
            <TouchableOpacity className="" onPress={refetch}>
              <Icon name="refresh" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {error && <Text>Error: {error.message}</Text>}
          {data && (
            <View className="">
              {isLoading && (
                <>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <ProxyItemDummy key={`dummy-${i}`} />
                    ))}
                </>
              )}
              {data
                .filter((server) => {
                  if (!query) return true;
                  return JSON.stringify(server)
                    .toLowerCase()
                    .includes(query.toLowerCase());
                })
                .map((proxy) => (
                  <ProxyItem
                    data={proxy}
                    key={`${proxy.url}-proxy-item`}
                    currentTime={currentTime}
                  />
                ))}
            </View>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
