// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import RianSprite from './RianSprite';
import { RIAN_STATES, getNextState } from './rianBrain';

export default function App() {
  const [state, setState] = useState(RIAN_STATES.IDLE);

  const handlePress = () => {
    setState(prev => getNextState(prev));
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.title}>Rian Sim</Text>

      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <RianSprite state={state} />
      </TouchableOpacity>

      <Text style={styles.hint}>Ткни по Риану, чтобы сменить позу ({state})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050510',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 16,
  },
  hint: {
    color: '#aaaaaa',
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
  },
});
