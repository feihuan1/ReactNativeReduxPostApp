import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Alert } from "react-native";

const EditModal = ({ isVisible, toggleModal, onSubmit, placeholder }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = () => {
        if(!title.trim() || !body.trim()) {
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
        onSubmit({ title, body });
        setTitle("");
        setContent("");
        toggleModal();
    };

    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder.title}
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder.body}
                    value={body}
                    onChangeText={setBody}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={toggleModal}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        padding: 20,
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    button: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButton: {
        backgroundColor: "red",
    },
    submitButton: {
        backgroundColor: "orange",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default EditModal;
