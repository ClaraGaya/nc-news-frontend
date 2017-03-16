import {combineReducers} from 'redux';

import reducerArticles from './articles.reducer';
import reducerTopics from './topics.reducer';

const reducer = combineReducers({
    articles: reducerArticles,
    topics: reducerTopics
});

export default reducer;