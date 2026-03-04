import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebaseConfig';



const Restaurant = () => {

    const {restaurants} = useLocalSearchParams();
    console.log(restaurants);

    const [restaurantData, setRestaurantData] = useState({});
    const [carouselData, setCarouselData] = useState([]);
    const [slotData, setSlotData] = useState([]);

    const getRestaurantData = async () => {
        try {
            const restaurantquery = query(collection(db,"restaurants"),where("name","==",restaurants));
            const restaurantSnapshot = await getDocs(restaurantquery);

            if(restaurantSnapshot.empty) {
                console.log("No restaurant data found for the given name.");
                return;
            }

            for(const doc of restaurantSnapshot.docs) {
                
                const restaurantData = doc.data();
                setRestaurantData(restaurantData);

                const carouselquery = query(collection(db,"carousel"),where("res_id","==",doc.ref))
                const carouselSnapshot = await getDocs(carouselquery);
                
                const carouselImages = [];
                carouselSnapshot.forEach((carouselDoc) => {
                    carouselImages.push(carouselDoc.data());
                });
                setCarouselData(carouselImages);

                const slotsquery = query(collection(db,"slots"),where("ref_id","==",doc.ref))
                const slotsSnapshot = await getDocs(slotsquery);
                
                const slots = [];
                slotsSnapshot.forEach((slotDoc) => {
                    slots.push(slotDoc.data());
                });
                setSlotData(slots);

            }

        } catch (error) {
         console.log("Error :- ",error);   
        }
    }

    useEffect(() => {
      getRestaurantData();
      console.log(restaurantData);
    }, []);
    

  return (
    <SafeAreaView className="flex-1 bg-[#2b2b2b]">
        <ScrollView className='h-full'>
            <View className='flex-1 my-2 p-2'>
                <Text className="text-xl text-[#fb9b33] text-base">{restaurants}</Text> 
                <Text className="text-white">{restaurantData.address}</Text>
            </View>  
            <View className='border-b border-[#fb9b33]'/>
        </ScrollView>
      
    </SafeAreaView>
  )
}

export default Restaurant