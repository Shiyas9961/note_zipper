import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyContentText from '../components/MyContentText'

const EditNote = () => {

    const [note, setNote] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const getSingleNote = async () => {
            const { data } = await axios.get(`http://localhost:5000/note/${id}`)
            setNote(data)
        }

        getSingleNote()
    },[id])

  return (
    <MyContentText title='Edit Note Page'>
        <h1>{note.title}</h1>
    </MyContentText>
  )
}

export default EditNote