import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCartIcon';
import Points from './point.js';
import Object from './Object';

function Category() {

    return (
        <div>
            <Button variant="contained" color="primary"> חדר ילדים</Button>
            <br />
            <br />
            <Button variant="contained" color="primary"> חדר שינה</Button>
            <br />
            <br />
            <Button variant="contained" color="primary"> סלון</Button>
            <br />
            <br />
            <Button variant="contained" color="primary"> חצר</Button>
            <br />
            <br />
            <Button className="button" variant="contained" color="primary">לקטלוג המלא</Button>
            {/* <Points /> */}
            <Object/>
            {/* <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>  */}

        </div>

    );
}

export default Category;