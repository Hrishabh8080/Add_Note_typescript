import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Note } from './modals/note.modal';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';




function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: new Date().toString(),
    title: "ADD your Note 😂 😊 😎 😅 ",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eos dolor cum, aliquam quo eius aut rerum! Quia, ut in?",
    color: "",
    date: new Date().toString()
  }]);


  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
