import React, { useState } from "react";
import { Text, View, StyleSheet,ScrollView } from "react-native";
import SearchView from "../compoments/searchView";
import UseResult from "../hooks/UseResult";
import ResturantList from "../compoments/ResturantList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchResult, results, error] = UseResult();
  const filterby = (price) => {
    return results.filter((item) => price === item.price);
  };

  return (
    <ScrollView>
      <View>
        <SearchView
          value={query}
          onEditing={(value) => {
            setQuery(value);
          }}
          onSearch={() => {
            searchResult(query);
          }}
        />
        <ResturantList title="High Price" result={filterby("$")} />
        <ResturantList title="Medium Price" result={filterby("$$")} />
        <ResturantList title="Low Price" result={filterby("$$$")} />
      </View>
    </ScrollView>
  );
};
export default SearchScreen;
