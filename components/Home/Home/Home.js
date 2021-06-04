import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MealDetail from '../MealDetail/MealDetail';

const Home = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    return (
        <View>
            {
                meals.map(meal => <MealDetail meal={meal} key={meal.idMeal}></MealDetail>)
            }
        </View>
    );
};

export default Home;