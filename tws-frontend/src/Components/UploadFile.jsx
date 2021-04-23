import React, { Component } from 'react';
import UploadFileService from '../Services/UploadFileService';
class UploadFile extends Component {
    constructor(props){
        super(props);


        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",
      
            fileInfos: [],
          };
    }

    componentDidMount(){
        UploadFileService.getFile().then((res)=>{
            this.setState({
                fileInfos: res.data
            });
        });
    }

    selectFile(e){
        this.setState({
            selectedFiles: e.target.files
        });
    }

    uploadFile(){
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile
        });

        UploadFileService.upload(currentFile, (event)=>{
            this.setState({
                progress: Math.round((100* event.loaded )/ event.total)
            });
        })
        .then((res)=>{
            this.setState({
                message: res.data.message
            });
            return UploadFileService.getFiles();
        })
        .then((files)=>{
            this.setState({
                fileInfos: files.data
            });
        })
        .catch(()=>{
            this.setState({
                progress: 0,
                message:"Could not upload this file!",
                currentFile: undefined
            });
        });

        this.setState({
            selectedFiles: undefined
        });
    }
    render() {
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos,
          } = this.state;
          
        return (
            <div>
                {currentFile && (
        <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
        </div>
                )}

        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>

        <button className="btn btn-success"
          disabled={!selectedFiles}
          onClick={this.upload}>Upload</button>

        <div className="alert alert-light" role="alert">{message}</div>

        <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
          </ul>
        </div>
            </div>
        );
    }
}

export default UploadFile;