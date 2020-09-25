import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

const Search = (props) => (
    <label>{props.label}
      <input 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      
    </label>    
);

export default Search;