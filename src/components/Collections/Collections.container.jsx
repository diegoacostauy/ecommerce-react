import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../WithSpinner/WithSpinner.component';
import Collections from './Collections.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// export default connect(mapStateToProps)(WithSpinner(Collections));
// is the same line as before but more readable
const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collections);

export default CollectionsContainer;