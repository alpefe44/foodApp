import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'

const CategoryScreen = ({ navigation }) => {

  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate('FoodOverview', { categoryId: item.id })
    }
    return (
      <CategoryGrid {...item} pressFood={pressHandler}></CategoryGrid>
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      style={{ marginVertical: 20 }}
    ></FlatList>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})