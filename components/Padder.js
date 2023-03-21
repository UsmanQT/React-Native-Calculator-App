import { StyleSheet, View } from "react-native";

import React from "react";

const Padder = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 10,
  },
});

export default Padder;
