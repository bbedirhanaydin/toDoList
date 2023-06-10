import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import TaskList from '../components/TaskList';

type handle = () => void;

const Home = () => {
  const [text, setText] = useState<any>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText('');
  };

  const handleDeleteTaskPress = (index: any) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Tasks</Text>
        <Text style={styles.explanation}>
          Enter your task in the text box and click the "add" button to add it
          to the list.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Pressable style={styles.button} onPress={handleAddTaskPress}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={tasks}
          renderItem={({item, index}) => (
            <TaskList
              press={(index: any) => {
                const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
              }}
              text={item}
            />
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 1.1,
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1.5,
    width: Dimensions.get('window').width / 1.1,
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 3.5,
    width: Dimensions.get('window').width / 1.1,
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: '#DDDDDD',
  },
  input: {
    borderWidth: 0.6,
    borderColor: '#DDDDDD',
    borderRadius: 3,
  },
  button: {
    backgroundColor: '#3A98B9',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  headerText: {
    fontSize: 25,
  },
  explanation: {
    fontSize: 16,
  },
});

export default Home;
