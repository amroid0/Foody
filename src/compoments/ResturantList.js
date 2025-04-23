import { StyleSheet,View,Text, Image,  TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const ResturantList = ({ title, result,navigation }) => {
  return (
    <View >
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={result}
        showsHorizontalScrollIndicator ={false}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={()=>{ 
              console.log('clicked')
              navigation.navigate('details', { id: item.id }) }}>
            <View style = {styles.container}>
              <Image source = {{uri: item.image_url}} style ={styles.image}/>
              <Text style = {styles.name}>{item.name}</Text>
              <Text > rating: {item.rating} - {item.review_count} reviews</Text>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    marginHorizontal:16

  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom:10,
    marginTop:10,
    marginHorizontal:16

  },
  name:{
    fontSize:14,
    fontWeight:'bold',
    marginTop:4,
  },
  image: {
    width:200,
    height:100,
    borderRadius:4,
  }
});
export default withNavigation(ResturantList);
