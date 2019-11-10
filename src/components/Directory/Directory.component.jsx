import React, {Component} from 'react';
import './Directory.styles.scss';
import Menuitem from '../Menuitem/Menuitem.component';
import SECTIONS_DATA from './sections.data.js';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">

        {
          sections.map(({id, ...props}) => (
            <Menuitem
              key={id}
              id={id}
              {...props}
            />
          ))
        }

      </div>
    );
  }

}

export default Directory;