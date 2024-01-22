import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { constant } from './utils/constants';
import AddButton from './compornents/AddButton';
import Header from './compornents/Header';
import Task from './compornents/Task';

import { taskDummies } from './taskDummie';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {taskDummies.map(item => <Task data={item}/>) }
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.blanco,
    position: "relative"
  },
  text: {
    color: constant.text,
    fontWeight: "bold"
  }
});
