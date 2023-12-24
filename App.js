import  React, { useState }  from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prev) => {
        return  [
          {text: text, key: Math.random().toString()},
          ...prev
        ];
      })
    }else{
      Alert.alert(
        'Warning', 'must be atleast 3 characters', [
          {text: 'close', onPress: () => console.log('alert closed')}
        ]
      )
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
    }} >
    <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          {/* to form */}
          <AddTodo submitHandler = {submitHandler}/>
          <View stlye = {styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <TodoItem item = {item} pressHandler = {pressHandler}/>
              )}
            />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },content: {
    padding: 40,
    flex: 1,
  },list: {
    marginTop: 20,
    flex: 1,
  }
});
