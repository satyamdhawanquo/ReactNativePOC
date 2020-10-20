import React from 'react';
import {Component} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {api_key} from '../../constants';

class Detail extends Component {
  state = {
    details: {},
  };

  fetchDetails = async (id) => {
    const details = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`,
    );
    const json = await details.json();

    this.setState({details: json});
  };

  componentDidMount() {
    const {route} = this.props;
    const {id} = route.params;
    this.fetchDetails(id);
  }

  render() {
    const {details} = this.state;
    return (
      <View>
        <Image
        style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${details.poster_path}`,
            width: Dimensions.get('screen').width,
            height: 200
          }}
        />
        <View style={styles.textContent}>
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.description}>{details.overview}</Text>
        <Text style={styles.release}>{details.release_data}</Text>
        <Text style={styles.rating}>Rating: {details.vote_average}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Circular Std Medium',
        fontSize: 24,
    },
    description: {
        fontFamily: 'Open Sans Regular',
        fontSize: 16
    },
    textContent: {
        padding: 10
    },
    rating: {
        fontFamily: 'Open Sans Regular',
        fontSize: 16
    }
});

export default Detail;
