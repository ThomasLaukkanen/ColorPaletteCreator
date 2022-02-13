import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

function ColorPalette({ route }) {
  const { colors, paletteName } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.txt}>{paletteName}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 2,
    padding: 16,
  },
  txt: {
    marginTop: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorPalette;
