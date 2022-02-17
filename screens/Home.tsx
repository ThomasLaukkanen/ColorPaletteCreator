import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';

function Home({ navigation, route }) {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  const [colors, setColors] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleFetch = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const palettes = await result.json();
      setColors(palettes);
      setIsRefreshing(false);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetch();

    setTimeout(() => {
      setIsRefreshing(false);
    }, 10000);
  }, [handleFetch]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  useEffect(() => {
    if (newColorPalette) {
      setColors((prevstate) => [newColorPalette, ...prevstate]);
    }
  }, [newColorPalette]);
  return (
    <FlatList
      style={styles.list}
      data={colors}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.modalText}>Add New Color Scheme</Text>
        </TouchableOpacity>
      }
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => navigation.push('ColorPalette', item)}
          colorPalette={item}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'lightblue',
    padding: 16,
    borderRadius: 2,
    marginBottom: 8,
  },
});
export default Home;
