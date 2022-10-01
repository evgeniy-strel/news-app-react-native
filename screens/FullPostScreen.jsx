import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Loading from "./../components/Loading";
import axios from "axios";

export const FullPostScreen = ({ route, navigation }) => {
  const { title, imageUrl, text } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <ScrollView>
      <View style={styles.fullPost}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={styles.imagePost}
        ></Image>
        <Text style={styles.descriptionPost}>{text}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fullPost: {
    margin: 15,
  },
  imagePost: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  descriptionPost: {
    marginTop: 20,
    fontSize: 18,
  },
});
