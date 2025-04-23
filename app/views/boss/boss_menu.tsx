import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Boss() {
  const router = useRouter();

  const bossOptions = [
    { name: "Godrick", image: "https://eldenring.fanapis.com/images/bosses/17f6953f0d5l0i1uthl5j30bc50wdo.png" },
    { name: "Red Wolf Of Radagon", image: "https://eldenring.fanapis.com/images/bosses/17f6992c3e3l0i1v0af3d14p4dcgzx.png"},
    { name: "Godfrey, First Elden Lord",  image: "https://eldenring.fanapis.com/images/bosses/17f69a82a2el0i1uta5rxvqv53g7e.png"},
    { name: "Fire Giant",  image: "https://eldenring.fanapis.com/images/bosses/17f69ba1aa7l0i1us08w3dodkoeju.png" },
    { name: "Maliketh, The Black Blade",  image: "https://eldenring.fanapis.com/images/bosses/17f69dbf58cl0i1ux7vft8wsk6ejbb.png" },
    { name: "Hoarah Loux, Warrio", image: "https://eldenring.fanapis.com/images/bosses/17f695022a1l0i1uv9aohy5ip9yh9f.png"},
  ];

  const handleBossSelect = (name: string) => {
    router.push({ pathname: "/views/boss/boss_details", params: { bossQuery: name } });
  };

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="p-5">
        <Text className="text-yellow-300 text-2xl font-bold mb-4 text-center">
          Select a Boss
        </Text>
        {bossOptions.map((boss) => (
          <TouchableOpacity 
            key={boss.name}
            onPress={() => handleBossSelect(boss.name)}
            className="bg-gray-800 p-4 my-2 rounded-lg items-center mt-10"
          >
            <Text className="text-yellow-300 text-3xl text-center p-4">
              {boss.name}
            </Text>
            <Image
                source={{ uri: boss.image }}
                className="w-52 h-52 mb-4 rounded-full"
                resizeMode="cover"
              />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}