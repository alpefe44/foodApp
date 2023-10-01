import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteFoodScreen from './screens/FavoriteFoodScreen';
import FavoritesContextProvider from './Store/favoritescontext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'white'
      }}
    >
      <Drawer.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Tüm Kategoriler' }} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteFoodScreen} options={{ title: 'Favoriler' }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: 'lightblue' }
          }}
        >
          <Stack.Screen name='Drawer' component={MyDrawer} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='FoodOverview' component={FoodOverviewScreen}></Stack.Screen>
          <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
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
