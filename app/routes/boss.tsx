import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Index() {
  const [contador, setContador] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getEldenRing = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://eldenring.fanapis.com/api/bosses?name=radahn");
        const result = await response.json();
        setData(result.data);
        console.log(result.data);
        await new Promise((resolve) => setTimeout(resolve, 4000));

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getEldenRing();
  }, []);

  return (
    <View className="flex-1 bg-black">
      <View className="flex p-5 justify-center items-center">
        <Image
          source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
          className="w-screen h-20 mb-4"
        />

        {isLoading ? (
          <View className="flex-1 justify-center items-center">
            <Image
              source={{ uri: "https://media.tenor.com/6y3G-_q2cYYAAAAM/elden-ring-zweihander.gif" }}
              className="w-52 h-52"
            />
            <Text className="text-yellow-300 text-xl mt-4">Loading...</Text>
          </View>
        ) : (
          data.map((radahn: any) => (
            <View key={radahn.id} className="mt-4">
              <Image
                source={{ uri: radahn.image }}
                className="ml-20 w-52 h-52 mb-4 rounded-full"
              />
              <Text className="font-bold text-4xl text-center text-yellow-300">{radahn.name}</Text>
              <Text className="m-5 text-center text-yellow-100">{radahn.description}</Text>
              <Text className="text-center text-red-500 text-xl">Region: {radahn.region}</Text>
              <Text className="text-center text-red-500 text-xl">Location: {radahn.location}</Text>
              <Text className="text-center text-red-500 text-xl">Health: {radahn.healthPoints}</Text>
              <Text className="mt-5 mb-1 text-center text-yellow-500 text-xl">Drops:</Text>
              {radahn.drops.map((drop: any, index: any) => (
                <Text className="ml-5 text-yellow-200 text-xl" key={index}>• {drop}</Text>
              ))}
            </View>
          ))
        )}
      </View>

      <View className="flex-1 bg-black justify-center items-center">
        <Text className="font-bold text-center text-red-700 text-2xl">
          Numero de SoulsLike zerado: {contador}
        </Text>
        <TouchableOpacity
          onPress={() => setContador(contador + 1)}
          className="mt-2 bg-red-500 px-6 py-3 rounded-lg border-2 border-red-700 shadow-lg active:bg-red-600"
        >
          <Text className="text-center text-black font-semibold">
            Click aqui para zerar um SoulsLike
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}