import  { useState } from 'react';
import styled from 'styled-components';
import {motion} from "framer-motion";

import {fetchSearch} from "../actions/booksAction";
import {useDispatch} from "react-redux";


const Nav = () => {


    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
  
    const inputHandler = (e) => {
      setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
      e.preventDefault();
      dispatch(fetchSearch(textInput));
      setTextInput("");
    };
    return (
        <StyledNav>

    <form className ="search"> 
    <input value={textInput} onChange={inputHandler} type="text"/>
    <button onClick={submitSearch} type = "submit">search</button>
    </form>

        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)` 
padding : 20px;
text-align : center;
input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);

}   
 button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #00008B	;
        color: white;
      }
    `;




    
export default Nav;