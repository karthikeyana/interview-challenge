import React from 'react';
import { useDispatch } from 'react-redux';
import Tag from '../CommonComponent/tag';
import actions from '../../store/actions';

export default (props) => {
  const dispatch = useDispatch();
  const data = props.items;
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
      {
        data && data.map(d=>{
          return (
              <li className="item" key={d.id} >
                <h2>{d.name}</h2>
                <Tag name={d.dietaries}/>
                <button className="remove-item" key={d.id} onClick={
                ()=> dispatch(actions.DeletePreview(data.find(t=> t.id == d.id)))}>x</button>
              </li>
          )
        })
      }
      </ul>
    </div>
);
}

