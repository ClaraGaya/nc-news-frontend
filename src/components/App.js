import React from 'react';
import {Link} from 'react-router';



const App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <div className="container">
            <Link to ="/"><img className="logo" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_second.png" alt="Northcoders logo"/></Link>
          </div>
        </header>
        {this.props.children}

      </div>
    );
  }
});

export default App;
