import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const MealDetail = ({meal}) => {
    const {strMeal, strMealThumb} = meal;
    
    return (
        <View style={styles.mealBox}>
            <Image
                source={{
                    uri: strMealThumb,
                }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={{fontSize: '20px', fontWeight: '600', padding: '5px'}}>{strMeal}</Text>
            <br />
            <button 
            style={{
                padding: '8px 20px', 
                background: 'tomato', 
                color: '#fff', 
                borderRadius: '2px', 
                border: 'none'}}>EXPLORE</button>
        </View>
    );
};

export default MealDetail;

const styles = StyleSheet.create({
    mealBox: {
      flex: 2,
      boxShadow: '5px 5px 10px gray',
      borderRadius: '5px',
      margin: '10px',
      padding: '10px',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
