import React from 'react';
import { Route } from 'react-router-dom';
import Collections from '../../components/Collections/Collections.component';
import Collection from '../Collection/Collection.component';

const Shoppage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={Collections} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shoppage;