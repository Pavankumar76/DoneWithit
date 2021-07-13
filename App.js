import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import {WelcomeScreen} from './app/screens/WelcomeScreen';
import {ViewImageScreen} from './app/screens/ViewImageScreen';
import { AppButton } from './app/components/AppButton';
import { Card } from './app/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ListingDetailsScreen></ListingDetailsScreen>
   
    </View>
    // <WelcomeScreen></WelcomeScreen>
    //<Card title="Red Jacket for Sale!!" subTitle="$100" 
    //image={require("./app/assets/jacket.jpg")}>

      
    //</Card>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#f8f4f4',
    padding:20,
    paddingTop:100,
   
  },
});
