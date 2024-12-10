import axios from "axios";


const PAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/payment";

class PaymentService {
  savePayment(payment) {
    return axios.post(PAYMENT_API_BASE_URL, payment);
  }

  getPayment() {
    return axios.get(PAYMENT_API_BASE_URL);
  }

  deletePayment(id) {
    return axios.delete(PAYMENT_API_BASE_URL + "/" + id);
  }

  getPaymentById(id) {
    return axios.get(PAYMENT_API_BASE_URL + "/" + id);
  }

  updatePayment(payment, id) {
    return axios.put(PAYMENT_API_BASE_URL + "/" + id, payment);
  }
}

export default new PaymentService();

