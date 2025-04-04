import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen(){
    const START_VALUES=0
    const [count, setCount] = useState(0);
    return(
        <View style ={{ backgroundColor: 'blue'}}>
            <Text>{count}</Text>
               <CustomButton title="Teate"></CustomButton>
        </View>
    );
} 
