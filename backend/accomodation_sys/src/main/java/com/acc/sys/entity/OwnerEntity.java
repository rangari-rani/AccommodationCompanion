package com.acc.sys.entity;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Data
@Table(name = "owner_sys")
public class OwnerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String category;
    private String price;
    private String address;
    private String description;
    
    

	public OwnerEntity() {
		super();
		// TODO Auto-generated constructor stub
	}



	public OwnerEntity( String name, String category, String price, String address, String description) {
		super();
		
		this.name = name;
		this.category = category;
		this.price = price;
		this.address = address;
		this.description = description;
		
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getdescription() {
		return description;
	}

	public void setdescription(String description) {
		this.description = description;
	}



	
    
}