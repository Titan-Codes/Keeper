import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import note from '../notes';
import CreateArea from './CreateArea';



function App() {
    function addNote(note){

    }

    return <div>
        <Heading />
        <CreateArea
        onAdd={addNote}
         />
        <Note key={1} title="Note 1" content="This is note 1" />
        <Footer />
        {/* {note.map((noteItem) => <Note
            key={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}

        />
        )} */}
    </div>
}

export default App;