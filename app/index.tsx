import { router } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View className="flex-1 w-full h-full bg-black">
      <ImageBackground
        source={require('@/assets/images/Home.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <View className="flex-1 bg-black/40 items-center justify-end pb-24">
          <View className="items-center px-6 w-full">
            <TouchableOpacity
              onPress={() => router.push('./views')}
              className="w-full bg-yellow-900/90 px-6 py-4 rounded-xl border border-yellow-600 shadow-xl"
            >
              <Text className="text-center text-yellow-100 text-xl font-serif font-bold tracking-widest uppercase">
                Enter Wiki
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;