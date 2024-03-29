import { Pressable, SafeAreaView, Text, View } from "react-native";
import style from "./style";
import { useState } from "react";

const Boxes = ({ value, onPress }) => {
  return (
    <Pressable style={style.box} onPress={onPress}>
      <Text style={style.text}>{value}</Text>
    </Pressable>
  );
};

const Winner = (box) => {
  const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winCon.length; i++) {
    const [a, b, c] = winCon[i];
    if (box[a] && box[a] === box[b] && box[a] === box[c]) {
      const winner = box[a] === "X" ? "Player 1" : "Player 2";
      return winner;
    }
  }
  return null;
};

export default function App() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const onPress = (i) => {
    // console.log(i);
    if (box[i] == "X" || box[i] == "O" || Winner(box)) {
      return box[i];
    } else {
      const newBox = box.slice();

      isX ? (newBox[i] = "X") : (newBox[i] = "O"); //newBox[i]=isX ? "X" : "O"
      //console.log(newBox);
      setBox(newBox);
      setIsX(!isX);

      // console.log(box);
    }
  };

  const Restart = () => {
    setBox(Array(9).fill(null));
    setIsX(true);
  };
  const status = isX ? "Player 1" : "Player 2";

  const displayWinner =
    Winner(box) === null ? null : "Winner is " + Winner(box) + "!!";

  const draw =
    !Winner(box) && box.every((val) => val !== null) ? "It's a draw" : null;
  return (
    <SafeAreaView style={style.display}>
      <View style={style.header}>
        <Text style={style.title}>TicTacToe</Text>
      </View>
      <View style={style.statusContainer}>
        <Text style={style.status}>{displayWinner || draw}</Text>
      </View>
      <View style={style.player}>
        <Text style={style.playerStatus}>
          Player 1 : " X " , Player 2 : " O "
        </Text>

        <Text style={style.playertext}>Turn: {status}</Text>
      </View>
      <View style={style.board}>
        <View style={style.row}>
          <Boxes value={box[0]} onPress={() => onPress(0)} />
          <Boxes value={box[1]} onPress={() => onPress(1)} />
          <Boxes value={box[2]} onPress={() => onPress(2)} />
        </View>
        <View style={style.row}>
          <Boxes value={box[3]} onPress={() => onPress(3)} />
          <Boxes value={box[4]} onPress={() => onPress(4)} />
          <Boxes value={box[5]} onPress={() => onPress(5)} />
        </View>
        <View style={style.row}>
          <Boxes value={box[6]} onPress={() => onPress(6)} />
          <Boxes value={box[7]} onPress={() => onPress(7)} />
          <Boxes value={box[8]} onPress={() => onPress(8)} />
        </View>
      </View>
      <View style={style.restartContainer}>
        <Pressable style={style.restartPress} onPress={Restart}>
          <Text style={style.pressText}>Restart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
