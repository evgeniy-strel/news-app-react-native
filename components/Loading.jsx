import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.viewLoading}>
      <ActivityIndicator size="large" />
      <Text style={styles.textLoading}>Идет загрузка...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLoading: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  textLoading: {
    marginTop: 15,
  },
});

export default Loading;
