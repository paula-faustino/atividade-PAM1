import React from "react";
import{ useState } from "react-router";
import { Button, Text, View} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    return(
        <View>
            <Text> teste </Text>
            <Button
            title="Ir para Tela 2"
             onPress={() => router.push("/tela2")}></Button>
              
        </View>
    );
} 
