import {
	FETCH_RESTRAUNTS,
  FETCH_RESTRAUNTS_SUCCESS,
  FETCH_RESTRAUNTS_FAIL,
	UPDATE_RESTRAUNTS
} from '../constants/constants';

const INITIAL_STATE = {
  query: {},
  error: '',
  loading: false,
	restraunts: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case FETCH_RESTRAUNTS:
      return { ...state, query: action.payload, loading: true, error: '' };
    case FETCH_RESTRAUNTS_SUCCESS:
      return { ...state, loading: false, restraunts: action.payload };
    case FETCH_RESTRAUNTS_FAIL:
      return { ...state, loading: false, query: {}, error: action.payload};
		case UPDATE_RESTRAUNTS:
			return { ...state, restraunts: action.payload}
    default:
      return state;
  }
};