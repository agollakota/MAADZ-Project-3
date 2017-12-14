
import { Rating, Tile, Avatar } from 'react-native-elements';


import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
const DOLLAR_IMAGE = require('FoodSwipe/images/dollar_symbol.png');
//designs the inner box for the swipe CardSection
//react elements was heavly used for this section to render the picture and the stars

class RestaurantCard extends React.Component {

	constructor(props) {
		super(props)
	}

	renderStarsRating(rating){
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1} readonly
				type="star" startingValue={rating}
				ref={(input) => { this.ratingInput = input; }}
			/>
		);
	}

	renderPriceRating(price){
		// Add 1 since values range 0-4
		price += 1;
		return (
			<Rating ratingBackgroundColor='red' imageSize={40}
				style={{ paddingVertical: 10 }} fractions={1} readonly
				type="custom" startingValue={price}
				ratingImage={DOLLAR_IMAGE} ratingColor="#397031"
				ratingBackgroundColor="white"
				ref={(input) => { this.priceInput = input; }}
			/>
		);
	}

// Bug fix for iOS: Rating components were not updating
	componentWillReceiveProps(nextProps){
		// References setCurrentRating function to update component
		this.ratingInput.setCurrentRating(nextProps.rating + 1)
		this.priceInput.setCurrentRating(nextProps.price)
	}

	render(){
		const restaurant = this.props
		return(
		<View style={styles.card}>
			<Tile height={300} width={300}
				 imageSrc={{uri:restaurant.photo}} />
			<Text style={styles.headers}>{restaurant.name}</Text>
			 { this.renderStarsRating(restaurant.rating)}
			 { this.renderPriceRating(restaurant.price)}
		 </View>)
	}
}

const styles = StyleSheet.create({ //restaurantcard style
  card: {
    justifyContent: 'center',
    alignItems: 'center',
		flex: 1,
		minWidth: 350,
		marginTop: 25,
		marginHorizontal: 25,
		marginBottom: 50,
		backgroundColor: '#7ec0ee',
  },
	headers: {
		fontSize: 30,
		fontWeight: 'bold'
	}
})

export default RestaurantCard;
