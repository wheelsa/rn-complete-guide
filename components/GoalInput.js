import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleSubmit = () => {
    props.onHandleSubmit(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={handleChangeText}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style = {styles.button}>
           <Button title="Cancel" color="red" onPress={props.onCancel} />
           </View>
          <Button title="ADD" onPress={handleSubmit} />
          {/* <Button title="ADD" onPress={props.onHandleSubmit.bind(this, enteredGoal)} /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
   flexDirection:'row',
   justifyContent: 'space-around',
   width: "60%",
  },
  button: {
    width: "40%",
  }
});
export default GoalInput;
