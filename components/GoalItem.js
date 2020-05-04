import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const GoalItem = (props) => {
  const { title } = props;
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onDelete.bind(this, props.id)}>
      {/* <TouchableHighlight onPress={props.onDelete}> */}

      <View style={styles.listItems}>
        <Text>{title}</Text>
      </View>
      {/* </TouchableHighlight> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
