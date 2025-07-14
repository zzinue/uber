import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import Swiper from "react-native-swiper";
import {useRef, useState} from "react";
import {onboarding} from "../../../uber-clone2/constants";

const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView className='flex h-full items-center justify-between bg-amber-300'>
            <TouchableOpacity onPress={() => {
                router.replace('/(auth)/sign-up')
            }} className='w-full flex justify-end items-end p-5'>
                <Text className='text-red-600 text-md font-JakartaBold'
                >SKIP</Text>
            </TouchableOpacity>

            {/*<Swiper*/}
            {/*    ref={swiperRef}*/}
            {/*    loop={false}*/}
            {/*    dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full'/>}*/}
            {/*    activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full'/>}*/}
            {/*    onIndexChanged={(index) => setActiveIndex(index)}*/}
            {/*>*/}
            {/*    {onboarding.map((item,key) => (*/}
            {/*        <View key={item.id}>*/}
            {/*            <Text>{item.title}</Text>*/}
            {/*            </View>*/}
            {/*    ))}*/}
            {/*</Swiper>*/}
        </SafeAreaView>
    )
}
export default Onboarding;