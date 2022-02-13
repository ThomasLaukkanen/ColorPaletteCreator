import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export const RadioButton = ({ item, setSelectedColors, selectedColors }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (selectedColor) => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setSelectedColors((prevstate) =>
        selectedColors([selectedColor, ...prevstate]),
      );
    } else if (!isEnabled) {
      const filteredColors = selectedColors.filter((color) => color !== item);
      setSelectedColors(filteredColors);
    }
  };
  return (
    <View style={styles.radioList}>
      <Text>{item.item.colorName}</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch(item)} />
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
});
