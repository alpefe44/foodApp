import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const ItemCard = ({ item }) => {
  const navigation = useNavigation();

  function pressNavigate() {
    navigation.navigate('FoodDetailScreen', {
      foodId: item.id
    })
  }
  
  return (
    <View style={{ alignItems: 'center', flex: 1, marginVertical: 20 }}>
      <TouchableOpacity onPress={pressNavigate}>
        <View style={{ width: width * 0.9, height: 250 }}>
          <Image style={{ flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.imageUrl }}></Image>
          <View style={{
            backgroundColor: 'white', height: 60, alignItems: 'center', paddingVertical: 2, borderRadius: 10
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{item.title}</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, marginHorizontal: 20 }}>{item.affordability}</Text>
              <Text style={{ fontSize: 14, marginHorizontal: 20 }}>{item.complexity}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ItemCard