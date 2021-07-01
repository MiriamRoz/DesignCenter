import React from 'react';
import { OBJModel } from 'react-3d-viewer';
import { render } from '@testing-library/react';

const Object=()=> {
    return (
      <div>
        <OBJModel
        width="300" height="305"
        position={{ x:20, y:-30, z:-150 }}
        src='3D/Uto Bench-OBJ.obj'
        onLoad={() => {
          //...
        }}
        onProgress={xhr => {
          //...
        }}
      />
        {/* <OBJModel src="../3D/kreslo.obj" texPath="" /> */}
      </div>
    );
}

export default Object;