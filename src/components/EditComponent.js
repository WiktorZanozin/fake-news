import React, {useState} from 'react'
import { useDispatch  } from 'react-redux';
import { update } from '../store/actions/newsActions';


const EditComponent=({newsItem})=> {
const dispatch = useDispatch(); 

const [editForm, setEditForm]= useState(newsItem.text);
console.log(editForm);
const handleEdit = (e) => {
  e.preventDefault();
  dispatch(update(newsItem.id, editForm));
  console.log(editForm);
}

return (
<div>
  <form onSubmit={handleEdit}>
    <textarea required rows="5"
     value={editForm}
     onChange={e=>setEditForm(e.target.value)}
     cols="28" placeholder="Enter Post" /><br /><br />
    <button type="submit">OK</button>
  </form>
</div>
);
}

export default EditComponent;