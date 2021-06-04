import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function FoodCard({ food, navigation }) {
    const pressHandler = () => {
        navigation.push('FoodDetail', food)
    }
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={{ uri: food.strMealThumb }}
            />
            <Text style={styles.heading}>{food.strMeal}</Text>
            <Button title='See Detail' onPress={pressHandler}></Button>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch'
    },
    heading: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
});
