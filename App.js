import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack';



export default function App() {
  return (
    
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  );
}



