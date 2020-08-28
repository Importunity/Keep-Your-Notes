import React from 'react';
import './Note.css'

function Note(props){
    return (
        <div className="note">
            <div className="card note-card">
                <div className="card-header note-header">
                    <span>
                        <i class="fas fa-thumbtack thumb items"></i>
                        <p>{props.title}</p>
                    </span>
                </div>
                <div className="card-body note-body">
                    <p>{props.content}</p>
                </div>
                <div className="card-footer note-footer">
                    <div className="container">
                        <div className="row items">
                            <div className="col-md-2">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div className="col-md-2">
                                <i class="fas fa-user-plus" title="collaborator"></i>
                            </div>
                            <div className="col-md-2">
                                <i class="fas fa-palette"></i>
                            </div>
                            <div className="col-md-2">
                                <i class="fas fa-image"></i>
                            </div>
                            <div className="col-md-2">
                                <i className="fas fa-archive"></i>
                            </div>
                            <div className="col-md-2">
                                <i class="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;