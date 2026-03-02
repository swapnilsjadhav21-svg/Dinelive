import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b]">
      <View className="mt-4 px-4">
        <View className="bg-[#3f3f3f] rounded-xl px-4 py-3">

          <View className="flex-row items-center justify-center">
            <Text className="text-white text-base">
              Welcome to{" "}
            </Text>
            <Image
              source={logo}
              style={{ width: 90, height: 24 }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

    <ScrollView className="flex-1">
      <View className="px-4 mt-6">

        <ImageBackground
          source={banner}
          resizeMode="cover"
          className="h-48 w-full rounded-2xl overflow-hidden justify-center">
        <BlurView intensity={10} className="flex-1 justify-center items-center">
          <Text
            className="text-white text-xl font-semibold italic text-center px-4">
            Dine With Your Loved Ones</Text>
        </BlurView>
        </ImageBackground>
      </View>
    </ScrollView>

    </SafeAreaView>
  );
};

export default Home;