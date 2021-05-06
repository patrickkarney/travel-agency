import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeFromDuration, 
  changeToDuration, addTags, removeTags} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeFromDuration: (from) => dispatch(changeFromDuration(from)),
  changeToDuration: (to) => dispatch(changeToDuration(to)),
  addTags: (tags) => dispatch(addTags(tags)),
  removeTags: (tags) => dispatch(removeTags(tags)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
