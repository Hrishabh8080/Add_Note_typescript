import React from 'react'
import { Note } from '../modals/note.modal'
import Notes from './Notes'

interface INotesList {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FC<INotesList> = ({ notes, setNotes }) => {

    const handleDelete = (id: string) => {
        setNotes(notes.filter((note => note.id !== id)))
    };
    const renderNotes = (): JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={handleDelete} />

        })
    }
    return (
        <>
            <h2 className='mt-3'>Notes</h2>
            <div>{renderNotes()}</div>
        </>
    )
}

export default NotesList