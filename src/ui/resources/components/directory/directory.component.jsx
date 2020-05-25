import React, { Component } from 'react';

import dummySections from '../../../../data/dummy_data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
  state = {
    sections: dummySections,
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="menu">
        {sections.map(({ id, imageUrl, title }) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Directory;
