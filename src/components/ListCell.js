import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../redux/postsSlice";

import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

import EditModal from "./EditModal";


const ListCell = ({ item }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const dispatch = useDispatch()

    const handleDeletePost = () => {
        console.log('Delete', item.id)
        dispatch(deletePost({id: item.id}))
    }

    const handleSubmit = ({ title, body }) => {
        dispatch(updatePost({ id: item.id, title: title, body: body }));
    }


    return (
      <View style={styles.item}>
        <View>
        <Text style={{...styles.text, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={styles.text}>{item.body}</Text>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={toggleModal}
        >
          <FontAwesome5 name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDeletePost}
        >
          <FontAwesome6 name="trash-can" size={24} color="red" />
        </TouchableOpacity>
        </View>
        <EditModal isVisible={isModalVisible} toggleModal={toggleModal} onSubmit={handleSubmit} placeholder={item} />
      </View>
    );
  };

  export default ListCell

  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 5,
      justifyContent: "space-between",
      alignItems: "stretch", 
      gap: 6
    }, 
    text:{
        fontSize: 16, 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',  
        marginTop: 8, 
        flex: 1, 
        backgroundColor: '#ccc', 
        margin: -10, 
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    button: {
      padding: 8, 
    },
  });