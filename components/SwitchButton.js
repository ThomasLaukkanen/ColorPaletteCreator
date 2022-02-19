import React, { useCallback } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SwitchButton = ({ item, setSelectedColors, selectedColors }) => {
  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );
  return (
    <View style={styles.radioList}>
      <View style={styles.nameContainer}>
        <View
          style={[styles.colorPreview, { backgroundColor: item.hexCode }]}
        />
        <Text style={styles.colorName}>{item.colorName}</Text>
      </View>
      <Switch
        value={
          !!selectedColors.find((color) => color.colorName === item.colorName)
        }
        onValueChange={(newValue) => handleUpdate(item, newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#e4e4e5',
    borderBottomWidth: 1,
    paddingLeft: 6,
  },
  colorPreview: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorName: {
    fontWeight: 'bold',
  },
});

export default SwitchButton;
