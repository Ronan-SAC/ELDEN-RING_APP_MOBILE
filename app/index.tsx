import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, View, TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <View className="flex-1 w-full h-full">
      <ImageBackground
        source={require('@/assets/images/Home.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-center">
          <View className="mt-36">
            <TouchableOpacity
              onPress={() => router.push('/routes/menu')}
              className="px-6 py-3 rounded-lg border-2 border-yellow-700 shadow-lg active:bg-yellow-600"
            >
              <Text className="text-center text-white font-semibold">
                Elden Ring Wiki
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;