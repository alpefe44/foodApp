import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../Store/favoritescontext'
import { FOODS } from '../data/dummy-data'



const { width, height } = Dimensions.get('window');

const FavoriteFoodScreen = ({ navigation }) => {

  const favoriteFoodContex = useContext(FavoritesContext)
  //console.log(favoriteFoodContex.ids, "favoritescreen")

  const favoritesFoods = FOODS.filter((item) => favoriteFoodContex.ids.includes(item.id));
  //console.log(favoritesFoods, "favorifoods");


  function handleNavigate(item) {
    navigation.navigate('FoodDetailScreen' , {
      foodId:item.id
    })
  }
  return (
    <ScrollView>
      {
        favoritesFoods.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={ () => handleNavigate(item)}
            >
              <View key={index} style={{ width: width * 0.9, height: height * 0.4, alignSelf: 'center', marginVertical: 15 }}>
                <Image style={{ flex: 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }} source={{ uri: item.imageUrl }}></Image>
                <View style={{ height: 50, borderRadius: 15, backgroundColor: 'white' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                      <Text style={{ marginHorizontal: 15 }}>{item.complexity}</Text>
                      <Text>{item.affordability}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  )
}

export default FavoriteFoodScreen