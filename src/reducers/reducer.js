import {combineReducers} from 'redux';

import reducerArticles from './articles';
import reducerTopics from './topics';
import reducerSpecificArticle from './article';
import reducerComments from './comments';



const reducer = combineReducers({
    articles: reducerArticles,
    topics: reducerTopics,
    article: reducerSpecificArticle,
    comments: reducerComments
});

export default reducer;