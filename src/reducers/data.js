import data from '../schemas/index.js'
import extras from '../data/api-extra.json'

import { fromJS } from 'immutable'
import { SEARCH_MEDIA } from '../actions/types.js'

const initialState = fromJS({
  entities: data.entities,
  categories: data.result.categories,
  search: '',
  extras,
})

function dataReducer( state = initialState, action ){
  switch (action.type) {
    case SEARCH_MEDIA: {
      return state.set('search', action.payload.query)
    }
    break;

    default:
      return state
  }
}

export default dataReducer // --- función Reducer para Redux