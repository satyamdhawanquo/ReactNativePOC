import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import SearchInput from '../../components/SearchInput';
import SearchResults from '../../components/SearchResults';
import {api_key} from '../../constants';
const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [queryData, setQueryData] = useState({});

  const fetchData = async () => {
       const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&query=${query}`); 
       const json = await data.json();
       setQueryData(json);
  }

  useEffect(()=> {
    fetchData();
  }, [query, setQuery]);

  const handleText = (text) => {
    setQuery(text);
  };
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: `https://storage.pixteller.com/designs/designs-images/2019-03-27/05/simple-background-backgrounds-passion-simple-1-5c9b95bd34713.png`,
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height * 0.3,
        }}
      />
      <View style={styles.overlay}>
        <View style={styles.search}>
          <Text style={styles.searchText}>
            What are you <Text style={styles.looking}>looking</Text> for?
          </Text>
          <SearchInput handleText={handleText} />
        </View>
      </View>
      <View style={styles.viewArea}>
        {query && query.length > 0 ? (
          <View style={styles.searchResult}>
            <SearchResults navigation={navigation} data={queryData} />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    borderBottomRightRadius: 50,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(105,105,105, 0.3)',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.3,
    borderBottomRightRadius: 50,
  },
  search: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  searchText: {
    fontSize: 24,
    fontFamily: 'Open Sans Bold',
  },
  looking: {
    fontSize: 30,
    color: 'white',
  },
  searchResult: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.55,
    top: 120,
    borderRadius: 10
  },
  viewArea: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: -1
  },
});

export default Search;
