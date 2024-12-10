package com.acc.sys.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    private long id;
    private String name;
    private String cardNumber;
    

	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Payment(long id, String name, String cardNumber) {
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