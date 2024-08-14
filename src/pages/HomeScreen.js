import { View, Text, Button } from "react-native";

export default function HomeScreen() {
    return(
      <View>
        <Text> HomeScreen </Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigation('Delails')}
        />
        <Button
            title="Go to Profile"
            onPress={() => navigator.navigation('Profile')}
        />
      </View>

);
}