import React from "react";
import {TouchableOpacity, Text} from "react-native";

interface Props {
    title: string
}

export default function CustomButton ({title}: Props) {
    return(
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}