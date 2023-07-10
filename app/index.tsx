import tw from "@/tailwind";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={tw`test`}>
      <Text>Open up app/index.tsx to start working on your app!</Text>

      <Link href="/modal" style={tw`mt-4 text-blue-500`}>
        <Text>Open modal</Text>
      </Link>
    </View>
  );
}
