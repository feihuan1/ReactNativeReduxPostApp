import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { addPost } from "../redux/postsSlice";

const Form = () => {
  const [post, setPost] = useState({title: '', body: ''});
  const dispatch = useDispatch()

  const handlePost = () => {
    if(!post.title.trim() || !post.body.trim()) {
      Alert.alert(
        ' 🖕  ',
        'Who are you kidding?',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
         style: 'cancel',
          },
        ],
        { cancelable: false }
      );
      return
    }

    dispatch(addPost(post)) 

    setPost({title:'', body: ''})
  }

  return (
    <View>
      <Text style={styles.title}>Add Post</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={post.title}
          onChangeText={(text) => setPost({...post, title: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Content"
          value={post.body}
          onChangeText={(text) => setPost({...post, body: text})}
        />
        <TouchableOpacity
         style={styles.button} 
         onPress={handlePost} 
        >
            <Text style={styles.buttonTerxt}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;

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
