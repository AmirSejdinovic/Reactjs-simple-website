import React from 'react';
import ConSli from './contac3.jpg';

function Contanct(){
  return<div>
<h1 className="bg-dark text-white p-3">Contact</h1>
<div className="row">
  <div className="col-md-6">
    <img src={ConSli} width="600"/>
  </div>
  <div className="col-md-6">
   <p>Amir</p>
   <p>amir24V@yahoo.com</p>
  </div>
</div>
  </div>
}
export default Contanct;