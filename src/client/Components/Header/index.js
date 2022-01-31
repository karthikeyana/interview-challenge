import React,{Fragment} from 'react';
import Utils from '../../Utils/config';

export default (props) => {
  
  let tag = Object.entries(Utils.tagCount(props.items));

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{props.items.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
          {tag.map(([key,value])=>{
              return (
                  <Fragment key={key}>
                    {value}x<span className="dietary"  key={key}>{key}</span>
                  </Fragment>
                )
              })}
         </div>
        </div>
      </div>
    </div>
);


}


