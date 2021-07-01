import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCartIcon';
import Points from './point.js';
import Object from './Object';

function Category() {

    function sort(value) {

    }
    function getAll(){

        fetch("http://localhost:3000/getAll").then((res)=>{
        console.log("res,", res)})
    }

    return (
        <div>
           {/* {name: "חדר ילדים", sortId: 1}, {name:"חדר שינה", sortId:2} ,{name: "סלון", sortId: 3}, {name:"חצר", sortId:4} */}
            {[{name: "חדר ילדים", sortId: 1}, {name:"חדר שינה", sortId:2} ,{name: "סלון", sortId: 3}, {name:"חצר", sortId:4}].map((room)=> <Button variant="contained" style={{margin: 30}}  color="primary" onClick={()=>sort(room.sortId)}> {room.name}</Button>)}
            <Button className="button" variant="contained" color="primary">לקטלוג המלא</Button> 
            {/* <Points /> */}
            <Object />
            {/* <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>  */}

        </div>

    );
}

export default Category;