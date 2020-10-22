import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Tile from '../Tile' ;
const SearchResults = ({navigation, data}) => {
    return <FlatList contentContainerStyle={styles.list} data={data.results} onScrollBeginDrag={(event)=>{console.log(event)}} renderItem={(item)=>{
        return <Tile key={item.item.id.toString()} navigation={navigation} item={item} />
    }}>
    </FlatList>
}

const styles = StyleSheet.create({
    list: {
        alignItems:"center",
        justifyContent:"center"
    }
});

export default SearchResults;