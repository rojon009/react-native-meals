import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import FoodCard from '../FoodCard/FoodCard';

export default function Home({ navigation }) {
    const [ foods, setFoods ] = useState({});
    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=k')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
        .catch(err => console.log(err))
    }, [])
  return (
    <FlatList
    data={foods}
    renderItem={({item}) => <FoodCard food={item} navigation={navigation} />}
    keyExtractor={item => item.idMeal}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
