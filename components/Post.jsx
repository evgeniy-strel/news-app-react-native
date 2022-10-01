import { StyleSheet, Text, Image, View } from "react-native";
import styled from "styled-components/native";

const ViewPost = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
  border-bottom-style: solid;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const Post = ({ title, imgUrl, onPressPost }) => {
  return (
    <ViewPost style={styles.post}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={styles.imagePost}
      ></Image>
      <Text style={styles.title}>{title}</Text>
    </ViewPost>
  );
};

const styles = StyleSheet.create({
  imagePost: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Post;
