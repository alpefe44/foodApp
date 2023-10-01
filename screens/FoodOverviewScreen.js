import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data';
import ItemCard from '../components/ItemCard';

const FoodOverviewScreen = ({ route, navigation }) => {
  const { categoryId: id } = route.params;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(id) >= 0
  })

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((item) => id === item.id).title;
    navigation.setOptions({
      title: categoryTitle
    }, [navigation, id])
  })

  //console.log(displayedFoods)

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          displayedFoods.map((item, index) => {
            return (
              <ItemCard key={index} item={item}></ItemCard>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default FoodOverviewScreen

const styles = StyleSheet.create({})