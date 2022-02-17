import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import COLORS from './constants';
import RadioButton from './RadioButton';
const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please enter a palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please add atleast 3 colors');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [name, selectedColors]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>{JSON.stringify(selectedColors, null, 2)}</Text>
      </ScrollView>
      <Text style={styles.paletteName}>Name of your Palette</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={'Palette name'}
        style={styles.input}
      />

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <RadioButton
            item={item}
            setSelectedColors={setSelectedColors}
            selectedColors={selectedColors}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonTxt}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 3,
  },
  buttonTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  paletteName: {
    marginBottom: 6,
  },
});

export default ColorPaletteModal;
