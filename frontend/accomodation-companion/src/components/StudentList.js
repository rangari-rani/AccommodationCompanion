import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";
import Student from "./Student";

const StudentList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await StudentService.getStudent();
        setStudent(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then((res) => {
      if (student) {
        setStudent((prevElement) => {
          return prevElement.filter((student) => student.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addStudent")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Student
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {student.map((student) => (
                <Student
                  student={student}
                  deleteStudent={deleteStudent}
                  key={student.id}></Student>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default StudentList;