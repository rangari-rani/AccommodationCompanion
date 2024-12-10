import axios from "axios";

const OWNER_API_BASE_URL = "http://localhost:8080/api/v1/owner";

class OwnerService {
  saveOwner(owner) {
    return axios.post(OWNER_API_BASE_URL, owner);
  }

  getOwner() {
    return axios.get(OWNER_API_BASE_URL);
  }

  deleteOwner(id) {
    return axios.delete(OWNER_API_BASE_URL + "/" + id);
  }

  getOwnerById(id) {
    return axios.get(OWNER_API_BASE_URL + "/" + id);
  }

  updateOwner(owner, id) {
    return axios.put(OWNER_API_BASE_URL + "/" + id, owner);
  }
}

export default new OwnerService();
