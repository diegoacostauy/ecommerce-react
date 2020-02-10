import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import './Directory.styles.scss';
import Menuitem from '../Menuitem/Menuitem.component';

const Directory = ({sections}) => (
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);