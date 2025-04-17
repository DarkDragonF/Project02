import React from 'react';


function StudentDisplay({students, setStudents, onEditStudent }) {
  
  function handleDelStudent(index){
    setStudents(s => s.filter((_, i) => i!==index));
  }

  return (
    <div className="student-display">
      <ul>
      {students.length === 0 && <p className="text-muted">Chưa có sinh viên nào.</p>}
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <div className="student-info">
              <p className="sName">{student.studentName}</p>
              <p>
                <span className='sid'>Mã SV: {student.studentID} | </span>
                <span className='sEmail'>Email: {student.studentEmail} | </span>
                <span className='sPhone'>SĐT: {student.studentPhone}</span>
              </p>
              <p>
                <span className="major">Nghành: {student.studentMajor} | </span>{' '}
                <span className="gender">Giới Tính: {student.studentGender}</span>{' '}
                <span className='bruh'>{}</span>
              </p>
            </div>
            <div className="btn-container">
              <button type="button" className="btn btn-warning" onClick={() => onEditStudent(index)}>Sửa</button>                                                       
              <button type="button" className="btn btn-danger" onClick={() => handleDelStudent(index)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDisplay