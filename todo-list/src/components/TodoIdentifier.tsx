import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { todoListID } from "../main";

export const TodoIdentifier: React.FC = () => {

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(todoListID)
          .then(() => {
            console.log("Todo List ID copied to clipboard:", todoListID);
            const copiedMessage = document.getElementById('copied-message');
            if (copiedMessage) {
              copiedMessage.style.visibility = 'visible'; // Show copied message
              setTimeout(() => {
                copiedMessage.style.visibility = 'hidden'; // Hide after 2 seconds
              }, 2000);
            }
          })
          .catch(err => {
            console.error('Failed to copy text to clipboard: ', err);
          });
      }


    return (
        <div className='todolist-identifier'><h1 className='todolist-identifier-text'>Todo List ID: <span>{todoListID}</span></h1><FontAwesomeIcon id="copy-icon" className="copy-icon" icon ={faCopy} size="1x" onClick={handleCopyToClipboard}/> <h2  id="copied-message" style={{ visibility: 'hidden' }}>COPIED TO CLIPBOARD</h2></div>
    );
};