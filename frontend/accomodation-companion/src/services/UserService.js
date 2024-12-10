import axios from "axios";
const Student_URL = "http://localhost:8080/home/registeruser";
const Student_URL1 = "http://localhost:8080/home/user";
class Userservice {
  addStudent(formData) {
    return axios.post(Student_URL, formData);
  }

  verifyUser(loginDetails) {
    return axios.post(Student_URL1, loginDetails);
  }
}

export default new Userservice();
