import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const RadioButton = ({ item, setSelectedColors, selectedColors }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((prevstate) => !prevstate);
  };
  useEffect(() => {
    if (isEnabled) {
      setSelectedColors((prevstate) => selectedColors([item, ...prevstate]));
    } else if (isEnabled === false) {
      const filteredColors = selectedColors.filter((color) => color !== item);
      setSelectedColors(filteredColors);
    }
  }, [isEnabled, item, setSelectedColors, selectedColors]);
  return (
    <View style={styles.radioList}>
      <Text>{item.item.colorName}</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
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

export default RadioButton;
