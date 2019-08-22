import React from 'react';

import './ToolkitItem.css';
import { Placeholder, Segment } from 'semantic-ui-react';

export default class ToolkitItem extends React.Component {

  render() {
    return (
      <div className='ToolkitItem'>
        <Segment raised>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>
      </div>
    );
  }
}
