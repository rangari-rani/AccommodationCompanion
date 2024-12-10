package com.acc.sys.services;

import com.acc.sys.entity.PaymentEntity;
import com.acc.sys.model.Payment;
import com.acc.sys.repository.PaymentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentServiceImpl implements PaymentService{

    private PaymentRepository paymentRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public Payment createPayment(Payment payment) {
        PaymentEntity paymentEntity = new PaymentEntity();

        BeanUtils.copyProperties(payment, paymentEntity);
        paymentRepository.save(paymentEntity);
        return payment;
    }

    @Override
    public List<Payment> getAllPayment() {
        List<PaymentEntity> paymentEntities
                = paymentRepository.findAll();

        List<Payment> payment = paymentEntities
                .stream()
                .map(pay -> new Payment(
                		pay.getId(),
                		pay.getName(),
                		pay.getCardNumber()))
                		
                .collect(Collectors.toList());
        return payment;
    }

    @Override
    public boolean deletePayment(Long id) {
        PaymentEntity payment = paymentRepository.findById(id).get();
        paymentRepository.delete(payment);
        return true;
    }

    @Override
    public Payment getPaymentById(Long id) {
        PaymentEntity paymentEntity
                = paymentRepository.findById(id).get();
        Payment payment = new Payment();
        BeanUtils.copyProperties(paymentEntity, payment);
        return payment;
    }

    @Override
    public Payment updatePayment(Long id, Payment payment) {
        PaymentEntity paymentEntity
                = paymentRepository.findById(id).get();
        paymentEntity.setName(payment.getName());
        paymentEntity.setCardNumber(payment.getCardNumber());

        paymentRepository.save(paymentEntity);
        return payment;
    }
}