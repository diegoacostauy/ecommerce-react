import React, { Component } from 'react';
import './Shoppage.styles.scss'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

class Shoppage extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({id, ...props}) => (
            <CollectionPreview key={id} {...props} />
          ))
        }
      </div>
    );
  }
};

export default Shoppage;