import { Stack } from "expo-router";
import '@/app/globals.css';
import { View,Image } from "react-native";
export default function RootLayout() {
  return (
    <View className="">
      <View className="p-5 justify-center items-center">
      <Image
        source={{ uri: "https://logos-world.net/wp-content/uploads/2023/09/Elden-Ring-Logo.png" }}
        className="w-screen h-20 "
      />
    </View>
    <View className="">
      <Stack screenOptions={{headerShown:false}}></Stack>
    </View>
    </View>
    
  )
  
}
