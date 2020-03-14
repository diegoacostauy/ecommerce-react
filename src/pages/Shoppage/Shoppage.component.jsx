import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Collections from '../../components/Collections/Collections.component';
import Collection from '../Collection/Collection.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionWithSpinner = WithSpinner(Collection);

class Shoppage extends Component {
  state = {
    loading: true
  };

  unsuscribeFromSnapshopt = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}
          render={(props) => (<CollectionsWithSpinner isLoading={loading} {...props} />)}
        />
        <Route path={`${match.path}/:collectionId`}
          render={(props) =>(<CollectionWithSpinner isLoading={loading} {...props} /> )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shoppage);