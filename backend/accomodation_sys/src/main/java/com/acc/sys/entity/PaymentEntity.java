package com.acc.sys.entity;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Data
@Table(name = "payment_sys")
public class PaymentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String cardNumber;  

	public PaymentEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentEntity(long id, String name, String cardNumber) {
		super();
		this.id = id;
		this.name = name;
		this.cardNumber = cardNumber;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
    
}