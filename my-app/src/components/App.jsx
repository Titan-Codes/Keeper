import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';



function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes=>{
            return [...prevNotes, note];
        })
    }

    return <div>
        <Heading />
        <CreateArea
        onAdd={addNote}
         />
        {notes.map((noteItem, index)=>{
            return <Note key={index} title={noteItem.title} content={noteItem.content} />
        })}
        <Footer />
    </div>
}

export default App;