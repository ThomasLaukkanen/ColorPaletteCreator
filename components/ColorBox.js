import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ColorBox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const text = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxTxt, text]}>{colorName}</Text>
    </View>
  );
}

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 16,
    margin: 4,
    color: '#fff',
    borderRadius: 6,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
  },
  boxTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
