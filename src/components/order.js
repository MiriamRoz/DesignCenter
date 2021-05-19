import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function Order(){
return(
<div>
<TextField id="standard-basic" label="firstName" />
<br/>
<TextField id="standard-basic" label="lastName" />
<br/>
<TextField id="standard-basic" label="Tel" />
<br/>
<TextField id="standard-basic" label="Adress" />
<br/>
<TextField id="standard-basic" label="Email" />
<br/>
<br/>
<button>submit</button>
</div>
);

    
}

export default Order;