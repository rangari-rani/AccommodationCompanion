package com.acc.sys.services;

import java.util.List;

import com.acc.sys.model.Payment;

public interface PaymentService {
	Payment createPayment(Payment payment);

    List<Payment> getAllPayment();

    boolean deletePayment(Long id);

    Payment getPaymentById(Long id);

    Payment updatePayment(Long id, Payment payment);

}
