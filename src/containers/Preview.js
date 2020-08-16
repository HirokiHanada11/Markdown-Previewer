import React from 'react';
import '../App.css';
import marked from 'marked';

class Preview extends React.Component {
    render() {
    return (
      <div className={'container'}>
        <header className={'header'}>
        Preview
        </header>
    <div id={'preview'} className={'outputBox'} dangerouslySetInnerHTML={{__html: marked(this.props.prevOutput)}} />
      </div>
    );
  }
}

export default Preview;