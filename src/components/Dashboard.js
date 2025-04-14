import {useState} from "react"

import React from 'react';
function Dashboard(){
   
    const [students, setStudents] = useState([
        { rollNumber: 123, name: "abc", email: "abc@gmail.com" },
        { rollNumber: 456, name: "xyz", email: "xyz@gmail.com" },
        { rollNumber: 789, name: "pqr", email: "pqr@gmail.com" }
      ]);
    
      return (
        <div className="container">
          <div className="header">
            <h3 style={{ flex: 0.25, textAlign: "center" }}>Enrollment Number</h3>
            <h3 style={{ flex: 0.25, textAlign: "center" }}>Name</h3>
            <h3 style={{ flex: 0.25, textAlign: "center" }}>Email</h3>
            <h3 style={{ flex: 0.25, textAlign: "center" }}>Action</h3>
          </div>
          {students.map((student) => (
            <div className="student" key={student.rollNumber}>
              <h3 style={{ flex: 0.25, textAlign: "center" }}>{student.rollNumber}</h3>
              <h3 style={{ flex: 0.25, textAlign: "center" }}>{student.name}</h3>
              <h3 style={{ flex: 0.25, textAlign: "center" }}>{student.email}</h3>
              <div style={{ flex: 0.25, textAlign: "center" }}>
                <button>Mark Out</button>
              </div>
            </div>
          ))}
        </div>
      );
}
export default Dashboard;