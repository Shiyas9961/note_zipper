import React, { useEffect, useState } from 'react'
import MyContentText from '../components/MyContentText'
import { notes } from '../data/notes'
import { Badge, Button, Card, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomToggle from '../components/CustomeToggle'
import axios from 'axios'

const MyNotes = () => {

  const [notes, setNotes] = useState([])

  const handleDeleteClick = (id) => {
    window.confirm("Do you want to delete this note")
  }

  useEffect(() => {
    const getAllNotes = async () => {
        const { data } = await axios.get('http://localhost:5000/notes')
        setNotes(data)
    }
    getAllNotes()
  }, [])

  return (
    <MyContentText title={'Welcome Back Shiyas'} >
      <Link to='/createnote'>
          <Button className='create--note-btn'>CREATE NEW NOTE</Button>
      </Link>
      {
        notes.map(note => (
          <Accordion key={note._id}>
              <Card  className='mb-2'>
                <Card.Header className='card-header'>

                  <CustomToggle eventKey="0">
                  <span className='note-title'>{note.title}</span>
                  </CustomToggle>

                  <div className="note-btns">
                    <Link to={`/note/${note._id}`}>
                      <Button className='p-1 note-btn'>Edit</Button>
                    </Link>
                    <Button className='p-1 note-btn' variant='danger' onClick={() => handleDeleteClick(note._id)}>Delete</Button>
                  </div>
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge bg='success'>Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {note.content}
                      </p>
                      <footer className="blockquote-footer">Created on - date</footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>

              </Card>
          </Accordion>
        ))
      }
    </MyContentText>
  )
}

export default MyNotes