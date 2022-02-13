import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
function PalettePreview({ handlePress, colorPalette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});
export default PalettePreview;
