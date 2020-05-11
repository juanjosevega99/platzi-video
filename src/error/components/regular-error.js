import React from 'react';
import './regular-error.css'

function RegularError(props) {
	return (
    <div className = "RegularError">
      <p>
        Oh, oh ...<br/>
        Algo no salió bien.
      </p>
      <p>
        Espera algunos segundos<br/>
        y <a href="./">vuelve a intentarlo.</a>
      </p>
    </div>
	)
}

export default RegularError;