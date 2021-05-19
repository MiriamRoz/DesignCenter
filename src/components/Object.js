import React from 'react';
import { OBJModel } from 'react-3d-viewer';
import { render } from '@testing-library/react';

const Object=()=> {
    return (
      <div>
        <OBJModel
        width="200" height="200"
        position={{ x: 0, y: -100, z: 0 }}
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