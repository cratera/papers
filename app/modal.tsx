import tw from "@/tailwind";
import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`font-bold text-xl`}>Modal</Text>
    </View>
  );
}
