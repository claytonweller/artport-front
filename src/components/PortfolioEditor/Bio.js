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
      display: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  onSaveChangesClick(e) {
    let savedStuff = convertToRaw(this.state.editorState.getCurrentContent());
    let jwt = localStorage.getItem("authToken");
    fetch("http://localhost:8080/api/bio", {
      method: "POST",
      body: JSON.stringify(savedStuff),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  onReturnClick(e) {
    fetch("http://localhost:8080/api/bio")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ savedStuff: res.data });
      })
      .catch(err => console.log(err));
    console.log("return");
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
        <button onClick={() => this.onReturnClick()}>return</button>
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
