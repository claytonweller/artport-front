import React, { Component } from "react";
import { connect } from "react-redux";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

export class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      savedStuff: EditorState.createEmpty()
    };
  }

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState
    });
  };

  onSaveChangesClick(e) {
    let savedStuff = convertToRaw(this.state.editorState.getCurrentContent());
    console.log(savedStuff);
    this.setState({ savedStuff: savedStuff });
  }

  render() {
    return (
      <div className="Bio">
        <h1>Bio</h1>
        <Editor
          editorState={this.state.editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <button onClick={() => this.onSaveChangesClick()}>save</button>
        <div>
          <textarea disabled value={draftToHtml(this.state.savedStuff)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Bio);
