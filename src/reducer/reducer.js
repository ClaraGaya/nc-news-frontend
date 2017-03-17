import {combineReducers} from 'redux';

import reducerArticles from './articles.reducer';
import reducerTopics from './topics.reducer';
import reducerSpecificArticle from './specific.article.reducer';
import reducerComments from './comments.reducer';



const reducer = combineReducers({
    articles: reducerArticles,
    topics: reducerTopics,
    article: reducerSpecificArticle,
    comments: reducerComments
});

export default reducer;