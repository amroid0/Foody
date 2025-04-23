import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import yelp from "../apis/yelp";
import { FlatList } from "react-native-gesture-handler";

const DetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getResturantDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResturantDetails(id);
  }, []);

  if (!result) return null;
  console.log(result);

  return (
    <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({ item }) => {
        return <Image source={{ uri: item }} width={300} height={200} />;
      }}
    ></FlatList>
  );
};
export default DetailScreen;
