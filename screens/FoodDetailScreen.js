import { View, Text, Image, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { FOODS } from '../data/dummy-data';
import { MaterialIcons } from '@expo/vector-icons';
import { FavoritesContext } from '../Store/favoritescontext';


const { width, height } = Dimensions.get('window');

const FoodDetailScreen = ({ route, navigation }) => {

  const favoriteFoodContex = useContext(FavoritesContext)
  const { foodId: id } = route.params;

  const foodFavorite = favoriteFoodContex.ids.includes(id)

  function changeFavorite() {
    if (foodFavorite) {
      favoriteFoodContex.removeFavorite(id);
    } else {
      favoriteFoodContex.addFavorite(id);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={changeFavorite}>
            <MaterialIcons name="favorite" size={34} color={foodFavorite ? 'yellow' : 'white'} />
          </TouchableOpacity>
        )
      },
      title:'İçerik'
    })
  },[changeFavorite , navigation])

  const foodDetail = FOODS.find((food) => food.id === id);
  console.log(foodDetail)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: width, height: 200, alignSelf: 'center' }}>
        <Image style={{ flex: 1 }} source={{ uri: foodDetail.imageUrl }}></Image>
      </View>
      <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'red' }}>{foodDetail.title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginHorizontal: 15 }}>{foodDetail.affordability}</Text>
        <Text style={{ marginHorizontal: 15 }}>{foodDetail.complexity}</Text>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold', color: 'yellow' }}>İçincekiler</Text>
        <View style={{ width: '100%', borderTopWidth: 2, borderTopColor: 'yellow', paddingTop: 10, alignItems: 'center' }}>
          {
            foodDetail.ingredients.map((item , index) => {
              return (
                <View key={index} style={{ width: width * 0.8, alignItems: 'center', backgroundColor: 'orange', marginBottom: 10, paddingVertical: 4, borderRadius: 15 }}>
                  <Text key={item}>{item}</Text>
                </View>
              )
            })
          }
        </View>

      </View>

    </View>
  )
}

export default FoodDetailScreen