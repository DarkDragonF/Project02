import { useState, useEffect } from 'react'
import StudentManager from './studentManager'
import "/WORKSPACE/thiThu02/src/bootstrap.bundle.js"
import "/WORKSPACE/thiThu02/src/bootstrap.css"
import StudentDisplay from './display'
import studentData from './data/data.json'
function App() {
 
  const[students, setStudents] = useState([])
  useEffect(() => {
    setStudents(studentData);
   }, []);

  const [editingIndex, setEditingIndex] = useState(null)

  function handleEditStudent(index) {
    setEditingIndex(index)
  }

  return (
    <div>
       <StudentManager 
          students={students} 
          setStudents={setStudents} 
          editingIndex={editingIndex} 
          setEditingIndex={setEditingIndex}
       />
       <StudentDisplay 
          students={students} 
          setStudents={setStudents}
          onEditStudent={handleEditStudent}
       />
    </div>
  )
}

export default App
