import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleSubmit = () => {
    // setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]); //use callback function
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleChangeText}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={handleSubmit} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View key={`goal-${goal.id}`} style={styles.listItems}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
