import {combineReducers} from 'redux';

import reducerTopics from './topics';
import reducerArticles from './articles';
import reducerArticle from './article';
import reducerComments from './comments';
import reducerUsers from './users';
import reducerUser from './user';



const reducer = combineReducers({
    topics: reducerTopics,
    articles: reducerArticles,
    article: reducerArticle,
    comments: reducerComments,
    users: reducerUsers,
    user: reducerUser
});

export default reducer;