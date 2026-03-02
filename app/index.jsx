import { Pressable, Text, View, Image, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import Frame from "../assets/images/Frame.png";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b]">

      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

      <View className="flex-1 justify-center items-center px-8">

        <Image source={logo} style={{ width: 280, height: 280 }} />

        <View className="mt-6 w-full items-center">

          <Pressable
            onPress={() => router.push("/signup")}
            className="bg-[#ff8c00] px-6 py-3 rounded-lg w-48 items-center"
          >
            <Text className="text-white font-bold">Sign Up</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/home")}
            className="bg-black px-6 py-3 rounded-lg w-48 items-center mt-4"
          >
            <Text className="text-[#ff8c00] font-bold">Guest User</Text>
          </Pressable>

          <View className="flex-row items-center my-5 w-64">
            <View className="flex-1 h-[1px] bg-gray-500" />
            <Text className="mx-3 text-gray-400">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-500" />
          </View>

          <Pressable onPress={() => router.push("/signin")}>
            <Text className="text-gray-300">
              Already a user?{" "}
              <Text className="text-[#ff8c00] font-semibold">Sign In</Text>
            </Text>
          </Pressable>

        </View>

      </View>

      <View className="items-center pb-4">
        <Image
          source={Frame}
          style={{ width: "100%", height: 120 }}
          resizeMode="contain"
        />
      </View>

    </SafeAreaView>
  );
}