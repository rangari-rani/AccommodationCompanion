package com.acc.sys.controller;

import com.acc.sys.model.Payment;
import com.acc.sys.services.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000",
		"https://accomodation-companion-mx31.vercel.app/"})
@RestController
@RequestMapping("/api/v1/")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/payment")
    public Payment createOwner(@RequestBody Payment payment) {
        return paymentService.createPayment(payment);
    }

    @GetMapping("/payment")
    public List<Payment> getAllPayment() {
        return  paymentService.getAllPayment();
    }

    @DeleteMapping("/payment/{id}")
    public ResponseEntity<Map<String,Boolean>> deletePayment(@PathVariable Long id) {
        boolean deleted = false;
        deleted = paymentService.deletePayment(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/payment/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        Payment payment = null;
        payment = paymentService.getPaymentById(id);
        return ResponseEntity.ok(payment);
    }
    
    

    @PutMapping("/payment/{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable Long id,
                                                   @RequestBody Payment payment) {
        payment = paymentService.updatePayment(id, payment);
        return ResponseEntity.ok(payment);
    }

}