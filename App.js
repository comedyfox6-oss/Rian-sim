// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import RianSprite from './RianSprite';
import { RIAN_STATES, getNextState } from './rianBrain';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import RianSprite from './RianSprite';
import { RIAN_STATES, getNextState } from './RianState';

// --- СПРАЙТЫ ---
import rian_idle from './assets/rian_idle.png';
import rian_blink from './assets/rian_blink.png';
import rian_left from './assets/rian_left.png';
import rian_right from './assets/rian_right.png';
import rian_jump from './assets/rian_jump.png';
import rian_jump2 from './assets/rian_jump2.png';
import rian_sit from './assets/rian_sit.png';
import rian_think from './assets/rian_think.png';


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
