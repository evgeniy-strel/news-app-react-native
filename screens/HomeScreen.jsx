import React from "react";
import axios from "axios";
import {
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Post from "../components/Post";
import Loading from "../components/Loading";

export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://63273cdb5731f3db9955fb8a.mockapi.io/news-react-native")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        alert("Ошибка при получении данных");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
      >
        <View style={{ margin: 15 }}>
          {posts.map((post) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("FullPost", post)}
            >
              <Post
                title={post.title}
                imgUrl={post.imageUrl}
                key={post.id}
                hello="123"
                jawejawejawe="23232"
                jwaeja="32323"
                hawehawe="4242"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
