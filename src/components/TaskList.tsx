import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TaskList = ({text, press}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Pressable style={styles.button} onPress={press}>
        <Text>
          <AntDesign name="delete" style={{color: '#ffffff', fontSize: 22}} />
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: '#3A98B9',
    borderRadius: 3,
  },
  button: {
    marginRight: 8,
    borderRadius: 80,
    padding: 3,
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
  deleteText: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default TaskList;
