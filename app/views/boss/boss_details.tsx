import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function BossDetails() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { bossQuery } = useLocalSearchParams(); // Get the query param from navigation

  useEffect(() => {
    const fetchBossData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://eldenring.fanapis.com/api/bosses?name=${bossQuery}`
        );
        const result = await response.json();
        setData(result.data);
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBossData();
  }, [bossQuery]); // Re-fetch when bossQuery changes

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-5">
        {isLoading ? (
          <View className="flex justify-center items-center h-full">
            <Image
              source={{
                uri: "https://media.tenor.com/6y3G-_q2cYYAAAAM/elden-ring-zweihander.gif",
              }}
              className="w-52 h-52"
            />
            <Text className="text-yellow-300 text-xl mt-4">Loading...</Text>
          </View>
        ) : (
          data.map((boss: any) => (
            <View key={boss.id} className="mt-4 items-center">
              <Image
                source={{ uri: boss.image }}
                className="w-52 h-52 mb-4 rounded-full"
                resizeMode="cover"
              />
              <Text className="font-bold text-4xl text-center text-yellow-300">
                {boss.name}
              </Text>
              <Text className="m-5 text-center text-yellow-100">
                {boss.description}
              </Text>
              <Text className="text-center text-red-500 text-xl">
                Region: {boss.region}
              </Text>
              <Text className="text-center text-red-500 text-xl">
                Location: {boss.location}
              </Text>
              <Text className="text-center text-red-500 text-xl">
                Health: {boss.healthPoints}
              </Text>
              <Text className="mt-5 mb-1 text-center text-yellow-500 text-xl">
                Drops:
              </Text>
              {boss.drops.map((drop: any, index: any) => (
                <Text className="text-yellow-200 text-xl" key={index}>
                  • {drop}
                </Text>
              ))}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}