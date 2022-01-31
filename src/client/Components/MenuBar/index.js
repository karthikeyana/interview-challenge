import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../CustomHooks/useFetch';
import config from '../../Utils/config';
import Tag from '../CommonComponent/tag';
import actions from '../../store/actions';

export default (props) => {
  const dispatch = useDispatch();
  const [input,setInput] = useState('');
  const data = useFetch(`${config.api}/api/items`,'POST',input);
  const preview = useSelector((state)=> state.preview);

  return (
    <div className="col-4">
      <div className="filters">
        <input className="form-control" placeholder="Name" onChange={(e)=> setInput(e.target.value)}/>
      </div>
      <ul className="item-picker">
      {
        data && data.map(d=>{
          return (
              <li className="item" key={d.id} type="submit" onClick={
                ()=> dispatch(actions.AddPreview(data.find(t=> t.id == d.id)))
                  }>
                <h2>{d.name}</h2>
                <Tag name={d.dietaries}/>
              </li>
          )
        })
      }
    </ul>
    </div>
);

}

