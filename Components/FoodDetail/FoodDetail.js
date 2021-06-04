import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FoodDetail({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{navigation.getParam('strMeal')}</Text>
      <Image
                style={styles.stretch}
                source={{ uri: navigation.getParam('strMealThumb') }}
            />
      <Text style={styles.instruction}>Making Instruction : </Text>
      <Text style={styles.details}>{navigation.getParam('strInstructions')}</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  heading : {
      fontSize: 30,
      paddingBottom: 25
  },
  stretch: {
    width: 300,
    height: 300,
    resizeMode: 'stretch'
},
instruction : {
    fontSize: 20,
    padding: 10
},
details: {
    padding: 10
}
});
