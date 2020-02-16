import React from 'react';
import EditComponent from './EditComponent';


const NewsListItem = ({ newsItem , deletePost, editPost}) => {
  const { text, id, editing} = newsItem
 // const userType = useSelector(state => state.authReducer.userType);
  return (
    <div>
        {!editing?text:<EditComponent newsItem={newsItem}/>}
        <button onClick={()=>deletePost(id)}>Delete</button>
        <button onClick={()=>editPost(id)}>Edit</button>
    </div>
     
  );
};

export default NewsListItem;