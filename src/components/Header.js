import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const Header = () => {
  const [todo, setTodo] = useState({title: '', body: ''});

  return (
    <View>
      <Text style={styles.title}>Add Post</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
        //   onChange={setTodo}
          value={todo}
        />
        <TextInput
          style={styles.input}
          placeholder="Body"
        //   onChange={setTodo}
          value={todo}
        />
        <TouchableOpacity
         style={styles.button} 
         onPress={() => setTodo('')} 
        >
            <Text style={styles.buttonTerxt}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  inputsContainer: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    margin: 8,
    width: "90%",
    borderRadius: 5,
  }, 
  button: {
    backgroundColor: 'orange', 
    padding: 8, 
    margin: 8, 
    width: '90%', 
    borderRadius: 5, 
    alignItems: "center"
  }, 
  buttonTerxt:{
    color: "white", 
    fontWeight: 'bold', 
    fontSize: 16
  },
});
