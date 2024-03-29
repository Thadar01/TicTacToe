import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  display: {
    backgroundColor: "#93b5c9",
    flex: 1,
  },
  header: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
  },
  statusContainer: {
    margin: 20,
    alignItems: "center",
    padding: 10,
  },
  status: {
    fontSize: 30,
  },

  box: {
    width: 100,
    height: 100,
    backgroundColor: "#8da5ba",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#2a2b2b",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  board: {
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  restartContainer: {
    margin: 20,
    alignItems: "center",
  },
  restartPress: {
    backgroundColor: "#4a7dd4",
    padding: 10,
    width: 300,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
  },
  pressText: {
    marginTop: 3,
    fontSize: 25,
  },
  player: {
    margin: 10,
    marginLeft: 40,
  },
  playertext: {
    fontSize: 16,
  },
  playerStatus: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default style;
