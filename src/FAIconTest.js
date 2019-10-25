import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './IconTest.css';

library.add(fab, faCheckSquare, faCoffee);

function FAIconTest() {
  return (
    <div className="FAIconTest">
      <div className="FAIconTest-part">
	<p>
	  <FontAwesomeIcon icon="check-square"/>
	  Favorite Beverage:
	</p>
	<button className="FAButton">
	  <a href="https://google.com/"
	    target="_blank"
	    rel="noopener noreferrer">
	    <FontAwesomeIcon icon="coffee" inverse />
	  </a>
	</button>
      </div>
      <div className="FAIconTest-part">
	<p>
	  <FontAwesomeIcon icon="check-square" />
	  Popular gadgets come from vendors like:
	</p>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'apple']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'microsoft']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'google']} inverse />
	</button>
      </div>
      <div className="FAIconTest-part">
	<p>
	  Used icon will be:
	</p>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'github']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'facebook-f']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'linkedin-in']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'steam-symbol']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'battle-net']} inverse />
        </button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'instagram']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'twitter']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'soundcloud']} inverse />
	</button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'spotify']} inverse />
        </button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'itunes-note']} inverse />
        </button>
	<button className="FAButton">
	  <FontAwesomeIcon icon={['fab', 'bandcamp']} inverse />
        </button>
      </div>
    </div>
  );
}

export default FAIconTest;
