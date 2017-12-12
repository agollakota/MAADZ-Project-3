import MapView from 'react-native-maps';



//import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import reducer from './reducers'



import Header from './components/Header'

import FilterContainer from './containers/FilterContainer'

import CardsContainer from './containers/CardsContainer'

// import FavoritesList from './containers/FavoritesList'



const store = createStore(reducer, applyMiddleware(thunk));

var lat =  42.00;

var longitude = -87.66;


import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { NativeRouter, Route } from 'react-router-native'
import thunk from 'redux-thunk'

import reducer from './reducers'

import Header from './components/Header'
import FilterContainer from './containers/FilterContainer'
import CardsContainer from './containers/CardsContainer'
// import FavoritesList from './containers/FavoritesList'

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component{
  render() {
    return (
			<Provider store={store}>
				<NativeRouter>
					<View style={{flex: 1}}>
						<Header headerText={"Food Swipe"}/>
						<Route exact path="/" component={FilterContainer}/>
						<Route path="/cards" component={CardsContainer}/>
					</View>
				</NativeRouter>
			</Provider>
    );
  }
}
// TODO: <Route path="/favorites" component={FavoritesList}/>