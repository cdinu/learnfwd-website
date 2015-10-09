import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class Page extends Component {
  render() {
    return (
      <div>
        <h1>
          HomePage
        </h1>
        <div className='text-center'>
        <button type="button" className="btn btn-danger navbar-btn">We have bootstrap</button>
        <Button>We have react-boostrap</Button>
        </div>
        <DropdownButton title="Default button" id="dropdown-size-medium">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

Page.displayName = 'LfpHome';
