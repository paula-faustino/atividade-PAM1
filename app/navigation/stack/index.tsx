import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function StackHome() {
    const router = useRouter();
    return (
        <View>
           tela inicial
           <Button
            title="Ir para detalhes"
            onPress={() => router.push("/navigation/stack/detail")}
            />
        </View>
    );
}