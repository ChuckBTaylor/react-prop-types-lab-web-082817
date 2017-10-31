import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return(
      <div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['salmon', 'eggshell-white', 'white']).isRequired,
  weight: function(props, propName, componentName){
    if(props[propName] === undefined){
      return new Error("Error")
    }
    if(isNaN(props[propName])){
      return new Error("Error")
    }
    if(typeof(props[propName]) !== 'number'){
      return new Error("Error")
    }
    if(props[propName] >= 300){
      return new Error("Error")
    }
    if(props[propName] <= 80){
      return new Error("Error")
    }
  }
};

export default Product;
