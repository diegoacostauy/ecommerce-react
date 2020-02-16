import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';

import {
  CollectionPage,
  Title,
  CollectionItems,
} from './Collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPage>
      <Title>{ title }</Title>

      <CollectionItems>
        {
            items
            .map(item => (
              <CollectionItem key={item.id} item={item}/>
            ))
        }
      </CollectionItems>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);