import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryGrid = ({ title, color, pressFood }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pressFood} style={styles.pressable}>
        <View style={[styles.insideView, { backgroundColor: color }]}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    width: 150,
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 7,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  pressable: {
    flex: 1,
    borderRadius: 20,
  },
  insideView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  }

})
export default CategoryGrid