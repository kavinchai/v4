import react from 'react';
import Navbar from './Navbar';

const Note = () => {
    return (
        <>
        <Navbar/>
        <div className="note-component">
            <h1 className="note-header header-txt">Notes</h1>
            <h2 className="exp-sub sub-txt">Leetcode here {':)'}</h2>
        </div>
        </>
    )
};

export default Note;