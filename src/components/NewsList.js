import React, {useState} from 'react';
import NewsListItem from './NewsListItem';
import {newsLoading, deletePost, editPost} from '../store/actions/newsActions';
import { useDispatch, useSelector  } from 'react-redux';

const NewsList = () => {
    const news = useSelector(state => state.newsReducer.news);
    const userType = useSelector(state => state.authReducer.userType);
    const dispatch = useDispatch();
    const[newsField, setNewsField]=useState('');
    const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newsLoading([
        ...news,
        {
          id:Date.now(),
          text:newsField,
          editing:false
        }
      ]))
      setNewsField('');
    } 
   
   

  return (
  <div>
    {userType==="admin"?
   <form className="card p-3 mx-auto col-md-6" onSubmit={submitHandler}>
            <textarea required rows="5" 
             cols="28"
             className="form-control"
             placeholder="Enter Post" 
             required rows="5"
             value={newsField}
             onChange={e=>setNewsField(e.target.value)}
            />
             
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
          </form>:""}
      <ul className="book-list">
        {
          news.map((newsItem) => {
            return (
              <div key={newsItem.id}>
                <NewsListItem
                  newsItem={newsItem}
                  deletePost={()=> dispatch(deletePost(newsItem.id))}
                  editPost={()=>dispatch(editPost(newsItem.id))}
                />
              </div>
            );
          })
        }
      </ul>
      </div>
    );
  };

  export default NewsList;