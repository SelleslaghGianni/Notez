import React, { useState } from 'react'

const Note = ({ note }) => {
  return (
      <li>{note.content}</li>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      id: notes.length + 1,
      deleted: false
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  function handleDeleteNote (id) {
    const newNotes = notes.filter(item => item.id !== id )
    setNotes(newNotes)
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1 className="text-6xl font-extrabold">Notez</h1>
      <div>
        <ul>
          {notes.map(note =>  
              [<Note key={note.id} note={note}/>,
              <button key={note.id+500}type="button" 
                onClick={() => handleDeleteNote(note.id)}>
                x
              </button>]
          )}
        </ul>
      </div>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}  
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App;
