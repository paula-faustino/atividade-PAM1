import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function HomeScreen() {
    const router = useRouter();
    return (
        <View>
            <Button 
            title="stack navigation"
            onPress={() => router.push("/navigation/stack")}/>
            <Button 
            title="tabs navigation"
            onPress={() => router.push("/navigation/tabs")}/>
            <Button
            title="drawer navigation"
            onPress={() => router.push("/navigation/drawer")}/>
        </View>
    );
}