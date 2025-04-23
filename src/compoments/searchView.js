import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchView = ({ value, onEditing, onSearch }) => {
  return (
    <View style={styles.containerStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="search "
        value={value}
        onChangeText={onEditing}
        onEndEditing={onSearch}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 16,
    height: 50,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 16,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
});
export default SearchView;
