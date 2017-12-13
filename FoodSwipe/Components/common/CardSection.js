import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}> ////controls style/layout
      {props.children}
    </View>
  );
};

const styles = { //Styling for the CardSection component
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};
//Make the component available to other parts of the app
export { CardSection };
