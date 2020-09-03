import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './More.css';

function More(props){
    //console.log(props.id);
    function handleClick() {
        console.log(`deleted id: ${props.id}`);
        props.onDelete(props.id);
    }
    return(
        <Dropdown>
            <Dropdown.Toggle variant="flat p-0">
                <i id="dropdown-options" className="fas fa-ellipsis-v"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={handleClick}>Delete Note</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
    );
}

export default More;