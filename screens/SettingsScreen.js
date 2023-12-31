import React, { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CalculatorContext } from '../context/CalculatorContext';
import DropDownPicker from 'react-native-dropdown-picker';
import Padder from '../components/Padder';

const SettingsScreen = ({ route, navigation }) => {
  const calculatorContext = useContext(CalculatorContext);
  const defaultUnits = calculatorContext.settings;
  const defaultDistanceUnits = defaultUnits.distanceUnits;
  const defaultBearingUnits = defaultUnits.bearingUnits;

  const [selectedDistanceUnits, setSelectedDistanceUnits] =
    useState(defaultDistanceUnits);
  const [selectedBearingUnits, setSelectedBearingUnits] =
    useState(defaultBearingUnits);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [distanceUnits, setDistanceUnits] = useState([
    { label: 'Miles', value: 'Miles' },
    { label: 'Kilometers', value: 'Kilometers' },
  ]);
  const [bearingUnits, setBearingUnits] = useState([
    { label: 'Degrees', value: 'Degrees' },
    { label: 'Mils', value: 'Mils' },
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            // navigate back with new settings.
            calculatorContext.saveSettings({
              distanceUnits: selectedDistanceUnits,
              bearingUnits: selectedBearingUnits,
            });
            navigation.navigate('Calculator', {
              reload: `${selectedDistanceUnits}:${selectedBearingUnits}`,
            });
          }}
        >
          <Text style={styles.headerButton}> Save </Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text> Distance Units </Text>
        <DropDownPicker
          open={open}
          value={selectedDistanceUnits}
          items={distanceUnits}
          setOpen={setOpen}
          setValue={setSelectedDistanceUnits}
          setItems={setDistanceUnits}
          zIndex={3000}
        />
        <Padder />
        <Text> Bearing Units </Text>
        <DropDownPicker
          open={open2}
          value={selectedBearingUnits}
          items={bearingUnits}
          setOpen={setOpen2}
          setValue={setSelectedBearingUnits}
          setItems={setBearingUnits}
          zIndex={1000}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 10,
    backgroundColor: '#E8EAF6',
  },
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  headerButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
