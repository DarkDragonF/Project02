import React, { useEffect } from "react";
import { useState } from "react";
import Validate from "./validation";


function StudentManager({students, setStudents, editingIndex, setEditingIndex}){
    
    const[sName, setSName] = useState("");
    const[sID, setSID] = useState("");
    const[sEmail, setSEmail] = useState("");
    const[sPhone, setSPhone] = useState("");
    const[major, setMajor] = useState("");
    const [gender, setGender] = useState("");
    const [modalShow, setModalShow] = useState(false);

    // khi có thông tin sửa thì sẽ hiển thị thông tin của sinh viên đó lên form
    useEffect(() => {
      if(editingIndex !== null){
        const student = students[editingIndex];
        setSName(student.studentName);
        setSID(student.studentID);
        setSEmail(student.studentEmail);
        setSPhone(student.studentPhone);
        setMajor(student.studentMajor);
        setGender(student.studentGender);
      }
      else{
        //reset form khi kết thúc sửa
        setSName("");
        setSID("");
        setSEmail("");
        setSPhone("");
        setMajor("");
        setGender("");
      }
    }, [editingIndex, students] ); // khi có sự thay đổi trong editingIndex hoặc students thì sẽ chạy lại hàm này
    
    function handleAddOrChangeStudent(){
      const {valid, message} = Validate(sName, sID, sEmail, sPhone, major, gender);
      if(!valid){
          alert(message);
          return;
      }
      const newStudent = {
          studentName: sName,
          studentID: sID,
          studentEmail: sEmail,
          studentPhone: sPhone,
          studentMajor: major,
          studentGender: gender
      };
      
      if(editingIndex !== null){
          // cập nhật sinh viên đang sửa
          setStudents(s => {
              const updated = [...s];
              updated[editingIndex] = newStudent;
              return updated;
          });
          setEditingIndex(null);
      } else {
          // thêm sinh viên mới
          setStudents(s => [...s, newStudent]);
      }
  
      // reset form
      setSName("");
      setSID("");
      setSEmail("");
      setSPhone("");
      setMajor("");
      setGender("");
  }

    function handleStudentNameChange(event){
        setSName(event.target.value);
    }

    function handleStudentIDChange(event){
        setSID(event.target.value);
    }

    function handleStudentEmailChange(event){
      setSEmail(event.target.value);
    }

    function handleStudentPhoneChange(event){
        setSPhone(event.target.value);
    }

    function handleStudentMajorChange(event){
      setMajor(event.target.value);
  }



    return(
    <div className="mainContainer">
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Student Management</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link">Filter</a></li>
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page" onClick={(e) => {e.preventDefault(); setModalShow(true);}} >
                            +Add Student
                        </a>
                    </li>
                </ul>
            </header>
        </div>

       {modalShow && (
         <section className="vh-100 gradient-custom">
      
         <div className="container py-5 h-100">
           <div className="row justify-content-center align-items-center h-100">
             <div className="col-12 col-lg-9 col-xl-7">
               <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                 <div className="card-body p-4 p-md-5">
                   <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                   <form>
                    {/* nút đóng form */}
                  <button
                    onClick={(e) => {e.preventDefault(); setModalShow(false);}}
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "red",
                        fontSize: "24px",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer"
                      }}
                  >
                    X
                  </button>
                   <div className="row">
                       <div className="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init className="form-outline">
                           <label className="form-label">Họ Và Tên</label>
                           <input type="text" id="sName" className="form-control form-control-lg" value={sName} onChange={handleStudentNameChange}/>
                           
                         </div>
                       </div>
                       <div className="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init className="form-outline">
                           <label className="form-label" htmlFor="phoneNumber">Mã Sinh Viên</label>
                           <input type="text" id="sId" className="form-control form-control-lg" placeholder="VD: SV001" value={sID} onChange={handleStudentIDChange}/>
                           
                         </div>
                       </div>
                     </div>
                     
                
   
                     <div className="row">
                       <div className="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init className="form-outline">
                           <label className="form-label" htmlFor="emailAddress">Email</label>
                           <input type="email" id="sEmail" className="form-control form-control-lg" value={sEmail} onChange={handleStudentEmailChange}/>
                           
                         </div>
                       </div>
                       <div className="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init className="form-outline">
                         <label className="form-label" >Số Điện Thoại</label>
                           <input type="number" id="sPhoneNumber" className="form-control form-control-lg" value={sPhone} onChange={handleStudentPhoneChange}/>
                           
                         </div>
                       </div>
                     </div>
   
                     <div className="row">
                       <div className="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init className="form-outline">
                           <label className="form-label" >Nghành Học</label>
                           <input type="password" id="adminPassword" className="form-control form-control-lg" value={major} onChange={handleStudentMajorChange}/>
                           
                         </div>
                       </div>
   
                       <div className="row mb-4">
                         <label className="form-label">Giới Tính</label>
                         <div className="col-md-2">
                           <input
                             className="form-check-input"
                             type="radio"
                             name="gender"
                             id="maleGender"
                             value="Nam"
                             checked={gender === "Nam"}
                             onChange={(e) => setGender(e.target.value)}
                           />
                           <label className="form-check-label" htmlFor="maleGender">Nam</label>
                         </div>
                         <div className="col-md-2">
                           <input
                             className="form-check-input"
                             type="radio"
                             name="gender"
                             id="femaleGender"
                             value="Nữ"
                             checked={gender === "Nữ"}
                             onChange={(e) => setGender(e.target.value)}
                           />
                           <label className="form-check-label" htmlFor="femaleGender">Nữ</label>
                         </div>
                       </div>
   
                       </div>
                    
   
                     <div className="mt-4 pt-2">
                     <button type="button" className="btn btn-primary btn-md" onClick={handleAddOrChangeStudent}>Lưu Thông Tin</button>
                     <button type="button" class="btn btn-secondary btn-md m-2">Hủy</button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       )}

    </div>
    );
}

export default StudentManager