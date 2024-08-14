import React from "react";
import {View, Text, Button} from 'react-native';

export default function DelailsScreen ({ nagation }){
    return(
        <View>
            <Text> Delails Screen </Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
            <Button
            title="='Go to Profile"
            onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}