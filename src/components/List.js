import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux';

import ListCell from './ListCell';



const List = () => {


    const posts = useSelector(state => state.posts)
    
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Posts</Text> 
      <FlatList 
        data={posts} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <ListCell item={item} />} 
        inverted={true} 
      />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    listContainer: {
      marginTop: 20
    },    
    title: {
        fontSize: 24, 
        textAlign: 'left', 
        fontWeight: 'bold', 
        marginLeft: 16, 
        marginBottom: 8, 
    }
  });