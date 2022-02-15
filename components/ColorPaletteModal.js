import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import COLORS from './constants';
import RadioButton from './RadioButton';
const ColorPaletteModal = () => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  return (
    <View>
      <Text>Name of your Palette</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={'Name of color palette'}
        style={styles.input}
      />

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={(item) => (
          <RadioButton
            item={item}
            setSelectedColors={setSelectedColors}
            selectedColors={selectedColors}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 8,
  },
});

export default ColorPaletteModal;
