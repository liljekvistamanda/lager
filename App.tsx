import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home.tsx";
import Pick from "./components/Pick.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Base, Typography } from './styles';
import { useState, useEffect } from 'react';


const Tab = createBottomTabNavigator();
const routeIcons = {
  "Lager": "home-sharp",
  "Plock": "list-circle-sharp",
};

export default function App() {
  const [products, setProducts] = useState([]);
  return (
      <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = routeIcons[route.name] || "alert";

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'green',
              tabBarInactiveTintColor: 'gray',
            })}
            >
            <Tab.Screen name="Lager">
            {(props) => <Home {...props} products={products} setProducts={setProducts} />}
            </Tab.Screen>
            <Tab.Screen name="Plock">
            {(props) => <Pick {...props} products={products} setProducts={setProducts} />}
            </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
      <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: Base.container,
    base: Base.base,
});
