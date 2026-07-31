import { router } from 'expo-router';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View className="flex-1 w-full h-full bg-elden-bg">
      <ImageBackground
        source={require('@/assets/images/Home.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >
        <View className="flex-1 bg-black/50 items-center justify-between px-6 pb-14">
          <View className="flex-1 items-center justify-center">
            <Text className="font-mono text-[11px] uppercase tracking-[0.14em] text-elden-gold mb-4">
              Lands Between
            </Text>
            <Text className="font-display text-5xl text-elden-fg text-center tracking-tight leading-tight">
              Elden Ring
            </Text>
            <Text className="font-display-medium text-xl text-elden-gold text-center mt-2 tracking-widest uppercase">
              Compendium
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('./views')}
            activeOpacity={0.85}
            className="w-full min-h-[48px] bg-elden-gold px-6 py-3.5 rounded-2xl items-center justify-center shadow-xl"
          >
            <Text className="text-black font-body-semibold text-[15px] tracking-wide uppercase">
              Enter the Compendium
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
