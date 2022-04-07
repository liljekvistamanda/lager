import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
      <ScrollView>
        <Text style={{color: '#262626', fontSize: 42, textAlign: 'center', borderWidth: 2, borderColor: '#e6e6e6', backgroundColor: '#e6e6e6', padding: 10, fontWeight: 'bold'}}>Lager-Appen</Text>
        <Image source={warehouse} style={{width: 320, height: 240, margin: 10}} />
        <Stock/>
        <StatusBar style="auto" />
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
