import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useContext } from 'react';

import { CalculatorContext } from '../context/CalculatorContext';

const HistoryScreen = ({ route, navigation }) => {
  const calculatorContext = useContext(CalculatorContext);

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  return (
    <FlatList
      style={styles.screen}
      keyExtractor={(item) => `${item.timestamp}`}
      data={calculatorContext.history}
      ItemSeparatorComponent={FlatListItemSeparator}
      renderItem={({ index, item }) => {
        var dt = new Date(item.timestamp);
        return (
          <TouchableHighlight
            onPress={() => {
              calculatorContext.saveSettings({
                distanceUnits: item.dUnits,
                bearingUnits: item.bUnits,
              });
              navigation.navigate('Calculator', {
                selectedItem: item,
                reload: `${item.id}`,
              });
            }}
          >
            <View style={styles.container}>
              <Text style={styles.pointStyle}>
                {' '}
                Start: {`${item.p1.lat}, ${item.p1.lon}`}{' '}
              </Text>
              <Text style={styles.pointStyle}>
                {' '}
                End: {`${item.p2.lat}, ${item.p2.lon}`}{' '}
              </Text>
              <Text style={styles.dateStyle}> {dt.toString()} </Text>
            </View>
          </TouchableHighlight>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 10,
    backgroundColor: '#E8EAF6',
  },
  pointStyle: {
    color: '#000',
    fontSize: 24,
  },
  dateStyle: {
    fontStyle: 'italic',
    fontSize: 10,
    alignSelf: 'flex-end',
  },
});

export default HistoryScreen;
