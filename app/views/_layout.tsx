import { Stack } from "expo-router";
import '@/app/globals.css';
import { View, Image } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-black"> 
      <View className="p-5 items-center"> 
        <Image
          source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
          className="w-full h-20" 
        />
      </View>
      
      <View className="flex-1"> 
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}