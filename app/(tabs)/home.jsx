import { View, Text, Image, ScrollView, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { React, useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";


// import { restaurants } from "../../store/restaurants";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"

import logo from "../../assets/images/dinetimelogo.png";
import banner from "../../assets/images/homeBanner.png";
import { router } from "expo-router";

const Home = () => {
  
  const [restaurants, setRestaurants] = useState([]);

  const renderItem = ({ item }) => {
  return (
    <TouchableOpacity onPress={()=>router.push(`/restaurants/${item.name}`)} activeOpacity={0.7}className="bg-[#5f5f5f] w-60 rounded-2xl p-4 mr-4 shadow-lg">
      <Image
        resizeMode="cover"
        source={{ uri: item.image }}
        className="w-full h-36 rounded-xl mb-3"/>

      <Text className="text-white text-base font-semibold" numberOfLines={1}>{item.name}</Text>
      <Text className="text-gray-300 text-sm mt-1" >{item.address}</Text>
      <Text className="text-gray-400 text-base mt-1">Open {item.opening} - Close {item.closing}</Text>
    </TouchableOpacity>
    );
  };

const getRestaurants = async() => {
  try {
    const q = query(collection(db,"restaurants"));
    const res = await getDocs(q);

    res.forEach(item => {
      setRestaurants( (prev) => [...prev,item.data()] );
    });

  } catch (error) {
    console.log("Error :- ",error);
  }
}

useEffect( () => {
  getRestaurants();
},[] )

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

    <ScrollView className="flex-1"  showsVerticalScrollIndicator={false} >
      <View className="px-4 mt-6">

        <ImageBackground
          source={banner}
          resizeMode="cover"
          className="h-48 w-full bg-[#2b2b2b] rounded-2xl overflow-hidden justify-center">
        <BlurView intensity={10} className="flex-1 justify-center items-center">
          <Text
            className="text-white text-xl font-semibold italic text-center px-4">
            Dine With Your Loved Ones</Text>
        </BlurView>
        </ImageBackground>
      </View>
      <View className="px-4 mt-6 mb-2">
        <Text className="text-white text-xl font-bold">
          Special Discount %
        </Text>
      </View>

    {
      restaurants.length > 0 ?
      <FlatList 
      data={restaurants} 
      renderItem={renderItem} horizontal 
      showsHorizontalScrollIndicator={false} 
      scrollEnabled={true} 
      contentContainerStyle={{ padding:16}} />
       : <ActivityIndicator animating color={"#fb9b33"}/> 
    }

    <View className="px-4 mt-6 mb-2">
      <Text className="text-[#fb9b33] text-xl font-bold">
        Our Restaurants
      </Text>
    </View>

    {
      restaurants.length > 0 ?
      <FlatList 
      data={restaurants} 
      renderItem={renderItem} horizontal 
      showsHorizontalScrollIndicator={false} 
      scrollEnabled={true} 
      contentContainerStyle={{ padding:16}} />
       : <ActivityIndicator animating color={"#fb9b33"}/> 
    }

    </ScrollView>

    </SafeAreaView>
  );
};

export default Home;