import React from 'react';
import '../App.css';

class Editor extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <header className={'header'}>
            Editor
        </header>
    <textarea id={'editor'} className={'inputBox'} value={this.props.textInput} onChange={this.props.handleInput}>{this.props.textInput}</textarea>
      </div>
    );
  }
}

export default Editor;