import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from '../assets/warehouse.jpg';
import Stock from './Stock.tsx';
import { Base, Typography } from '../styles';

export default function Home({route, products, setProducts}) {
  return (
      <ScrollView contentContainerStyle={styles.base}>
        <Text style={styles.frame}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 320, height: 240, marginBottom: 28 }} />
        <Stock products={products} setProducts={setProducts} />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    base: Base.base,
    header: Typography.header1,
    frame: Base.frame,
});
