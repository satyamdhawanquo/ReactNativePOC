import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/Card';
import {api_key, constant} from '../../constants';
import HomeText from './HomeText';
import HorizontalButton from '../../components/HorizontalButton';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
class Home extends Component {
  state = {
    topRated: [],
    trending: []
  };

  fetchData = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=fc5acb8a7a86a0c24fe123f5c38c2e7c&page=1',
      {
        method: 'get',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      },
    );
    const trending = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=fc5acb8a7a86a0c24fe123f5c38c2e7c&language=en-US&page=1`,
      {
        method: 'get',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      },
    );
    const response = await data.json();
    const response2 = await trending.json();
    this.setState({topRated: response.results, trending: response2.results});
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {topRated, trending} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <SafeAreaView>
          <View>
            <SeeMore text={constant.topMovies} />
            <HorizontalList data={topRated} navigation={navigation} />
          </View>
          <View>
            <SeeMore text={constant.trending} />
            <HorizontalList data={trending} navigation={navigation} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const SeeMore = ({text}) => {
  return (
    <View style={styles.headerText}>
      <HomeText text={text} />
      <HorizontalButton text={'See More'} height={30} width={70} />
    </View>
  );
};

const HorizontalList = ({data, navigation}) => {
  return (
    <View style={styles.horizontalCard}>
      <FlatList
        horizontal={true}
        style={styles.horizontalScroll}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => {
          return (
            <Card>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('Details', {
                    id: item.item.id,
                  })
                }>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.item.poster_path}`,
                    width: 250,
                    height: 290,
                  }}
                />
              </TouchableWithoutFeedback>
            </Card>
          );
        }}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
  headerText: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
