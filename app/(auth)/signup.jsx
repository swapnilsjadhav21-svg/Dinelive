import { View, Text, StatusBar,Pressable,Image, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../../assets/images/dinetimelogo.png";
import Frame from "../../assets/images/Frame.png";

import { Formik } from 'formik';
import validateScema from '../../utils/authSchema';


const Signup = () => {
  const router = useRouter();
       
    const handleSignup = (values) =>{
            console.log(values);
        }
    
  return (
    
        <SafeAreaView className="flex-1 bg-[#2b2b2b]">
    
          <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />
    
          <View className="flex-1 justify-center items-center px-8">
            <Image source={logo} style={{ width: 200, height: 100 }} />
            <View className='text-white'>Let's get you Started</View>

            <Formik 
                initialValues={{email:"",password:""}} 
                validationSchema={validateScema} 
                onSubmit={handleSignup}>
                {({handleChange,handleBlur,handleSubmit,values,errors,touched}) => (
                 
                 <View className='w-full'>
                        
                        <Text className='text-[#f49b33] mt-4 mb-2'>Email: </Text>
                       
                        <TextInput 
                        className='h-10 border border-white text-white rounded px-2'
                         keyboardType="email-address"
                         onChangeText = {handleChange("email")} 
                         onBlur={handleBlur("email")} 
                         value={values.email} />
                         {touched.email && errors.email && <Text className='text-red-500 text-xs mb-2'>{errors.email}</Text>}

                        <Text className='text-[#f49b33] mt-4 mb-2'>Password: </Text>

                        <TextInput 
                        className='h-10 border border-white text-white rounded px-2'
                        secureTextEntry={true}
                         onChangeText = {handleChange("password")} 
                         onBlur={handleBlur("password")} 
                         value={values.password} />
                         {touched.password && errors.password && <Text className='text-red-500 text-xs mb-2'>{errors.password}</Text>}

                    </View>
                )}
            </Formik>

    
            <View className="mt-6 w-full items-center">
              <Pressable
                onPress={() =>{handleSubmit} }
                className="bg-[#ff8c00] px-6 py-3 rounded-lg w-48 items-center mt-4">
                <Text className="text-white font-bold">Sign Up</Text>
              </Pressable>
            </View>

            <View>
              <Pressable onPress={() => router.push("/signin")}>
            <Text className="text-gray-300 my-5 padding-4">
              Already a user?{" "}
              <Text className="text-[#ff8c00] font-semibold">Sign In</Text>
            </Text>
          </Pressable>
            </View>
    
          </View>
    
          <View className="items-center pb-4 mb-2">
            <Image
              source={Frame}
              style={{ width: "100%", height: 120 }}
              resizeMode="contain"
            />
          </View>
    
        </SafeAreaView>
  )
}

export default Signup