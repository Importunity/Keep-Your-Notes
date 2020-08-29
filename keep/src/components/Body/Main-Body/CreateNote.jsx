import React, { useState, useEffect, useRef } from 'react';
import './CreateNote.css';
import TextareaAutoSize from 'react-textarea-autosize';




let useClickOutside = (handler) =>{
    let domNode = useRef();
    useEffect(() =>{
        // the check handler is used to check to make sure that the event is outside the document object model handler
        let checkHandler = (event) => {
            // of the document object node contains an event target, then handle
            if(!domNode.current.contains(event.target)){
                handler();
            }
        };
        // adds an event listener to check if its clicked then outside to false
        document.addEventListener("mousedown", checkHandler);
        return () => {
            document.removeEventListener("mousedown", checkHandler);
        };
    });
    return domNode;
};

// used to show the center lightbulb of the page
const CenterLightbulb = () => (
    <div className="empty-content">
        <i id="cn-lightbulb" className="far fa-lightbulb fa-5x"></i>
        <h5>Notes you add appear here</h5>
    </div>
)

function CreateNote(props){
    /**
     * lightbulb shows on default
     */
    const[showLightbulb, setShowLightBulb] = React.useState(true);
    /**
     * creates a note
     * currently the note is default which has an empty content and title
     * setNote is used to change the content and title
     */
    const [note, setNote] = useState({title: "",content: ""});
    
    function handleChange(event) {
        const { name, value } = event.target;
        //sets the note and returns the previous note with the value of the title/content
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    
    //adds a note and then reinitializes the note to empty
    function addNote() {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    /*
        used to check if the input field was clicked or not, if clicked then change to card
        change will hold the current value of the state
        and setChange will help us change it
        in this case change is initialized to false;
    */
    const [change, setChange] = useState(false);
    /**
     * used to check if the user clicked outside the component
     * isOutside will hold the current value of fase
     * and setIsOutside is used to check if the user clicked outside
     */
    const [isOpen, setIsOpen] = useState(false);
    // initialize document open to false, because it hasnt been open
    let domNode = useClickOutside(() => {
        setIsOpen(false);
        // if the input field has changed and the card is open and note has content
        if(change && isOpen && note.content !== "" ){
            // submit the note
            addNote();
            // reset change to false 
            setChange(false);
            // there's now a note on the page, therefore dont show the center lightbulb
            // when creating a remove method make sure to remember to check if there are any notes on the page
            setShowLightBulb(false);
        }
        // reinitializes not title and content to empty
        setNote({
            title: "",
            content: ""
        })
    });
    //console.log(isOpen);

    return (
        /*
            is change = true?, that means that the inputfield is pressed 
            if yes, then change the input field into a card
        */

        <div ref={domNode} className="container take-a-note-container">
            {change && isOpen?(
                <div  className="card w-50">
                    <div className="card-header">
                        <TextareaAutoSize name="title" onChange={handleChange} value={note.title} className="input" type="text" placeholder="Title"></TextareaAutoSize>
                    </div>
                    <div className="card-body">
                        <TextareaAutoSize  name="content" onChange={handleChange} value={note.content} id="body-input" className="input" type="text" placeholder="Take a note.."></TextareaAutoSize>
                    </div>
                </div>
            ):(
                <div>
                    <input onClick={() => {setChange(true); setIsOpen(true);}}  className="take-a-note" type="text" placeholder="Take a note..." />
                    {showLightbulb? <CenterLightbulb /> : null}
                </div>
            )}
        </div>
    );
}


export default CreateNote;