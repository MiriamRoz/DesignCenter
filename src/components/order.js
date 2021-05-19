import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function Order(){
return(
<div>
<TextField id="standard-basic" label="firstName" />
<TextField id="standard-basic" label="lastName" />
<TextField id="standard-basic" label="Tel" />
<TextField id="standard-basic" label="Adress" />
<TextField id="standard-basic" label="Email" />
</div>
);

    
}

export default Order;