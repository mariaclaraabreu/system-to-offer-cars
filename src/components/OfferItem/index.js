import React from 'react';
import ImgBeetle from '../../assets/beetle.jpg'
import Button from '../../components/Button';
import './styles.css';

const OfferItem = (props) => (
  
    <li 
      className='oc-item-list'
      key={props.id}
    >
      <div className="oc-elem-item">
        <img src={ImgBeetle} alt="Image car"/>
      </div>
      <div className="oc-elem-item">
        <h3>{props.brand}</h3>
        <span><strong>Model: </strong>{props.model}</span>

      </div>
      <div className="oc-elem-item oc-options-item ">
        <Button
          name="Edit"
          className="green"
          onClick={props.onClickEdit}
        />
        <Button
          name="Delete"
          className="orange"
          onClick={props.onClickDelete}
        />
      </div>
    </li>
  

    // <li
    //   key={props.id}

    
    // >
    //   testando: {brand}
    // </li>
      
);

export default OfferItem;
