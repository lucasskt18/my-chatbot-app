import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import './FileAttachmentButton.css';

const FileAttachmentButton = () => {
    return (
        <button className="file-attachment-button" aria-label="Anexar arquivo">
            <FontAwesomeIcon icon={faPaperclip} className="attachment-icon" />
        </button>
    );
};

export default FileAttachmentButton;
