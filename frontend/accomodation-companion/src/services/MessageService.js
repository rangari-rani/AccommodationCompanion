import axios from "axios";

const MESSAGE_API_BASE_URL = "http://localhost:8080/api/v1/message";


class MessageService {
  saveMessage(message) {
    return axios.post(MESSAGE_API_BASE_URL, message);
  }

  getMessage() {
    return axios.get(MESSAGE_API_BASE_URL);
  }

  deleteMessage(id) {
    return axios.delete(MESSAGE_API_BASE_URL + "/" + id);
  }

  getMessageById(id) {
    return axios.get(MESSAGE_API_BASE_URL + "/" + id);
  }

  updateMessage(message, id) {
    return axios.put(MESSAGE_API_BASE_URL + "/" + id, message);
  }
}

export default new  MessageService();
