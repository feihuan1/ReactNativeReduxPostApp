import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome6, FontAwesome5 } from '@expo/vector-icons';



const List = () => {
    const dummyData = [
        {id: 1, title: "title1", body: 'body1'},
        {id: 2, title: "title2", body: 'body311111111'},
        {id: 3, title: "title3", body: 'asdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdas'},
        {id: 4, title: "title3", body: 'asdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdas'},
        {id: 5, title: "title3", body: 'asdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdasasdadasdadasdasdadasdasdasdasdadsadadasdasdas'},
    ]

    const renderItem = ({ item }) => {
        return (
          <View style={styles.item}>
            <View>
            <Text style={{...styles.text, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={styles.text}>{item.body}</Text>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
            //   onPress={() => onDelete(item.id)}
            >
              <FontAwesome5 name="edit" size={24} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
            //   onPress={() => onDelete(item.id)}
            >
              <FontAwesome6 name="trash-can" size={24} color="red" />
            </TouchableOpacity>
            </View>
          </View>
        );
      };
    
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.title}>Posts</Text> 
      <FlatList 
        data={dummyData} 
        keyExtractor={item => item.id.toString()} 
        renderItem={renderItem}
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    title: {
        fontSize: 24, 
        textAlign: 'left', 
        fontWeight: 'bold', 
        marginLeft: 16, 
        marginBottom: 8, 
    },
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