
import {Stack} from 'expo-router';
import 'react-native-reanimated';

import {useFonts} from "expo-font";

export default function RootLayout() {
    const [loaded] = useFonts({
        "Jakarta-Bold": require("../../uber-clone2/assets/fonts/PlusJakartaSans-Bold.ttf"),
        "Jakarta-ExtraBold": require("../../uber-clone2/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "Jakarta-ExtraLight": require("../../uber-clone2/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
        "Jakarta-Light": require("../../uber-clone2/assets/fonts/PlusJakartaSans-Light.ttf"),
        "Jakarta-Medium": require("../../uber-clone2/assets/fonts/PlusJakartaSans-Medium.ttf"),
        "Jakarta-Regular": require("../../uber-clone2/assets/fonts/PlusJakartaSans-Regular.ttf"),
        "Jakarta-SemiBold": require("../../uber-clone2/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    });

    // if (!loaded) {
    //   // Async font loading only occurs in development.
    //   return null;
    // }

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(root)" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="+not-found"/>
        </Stack>
    );
}
