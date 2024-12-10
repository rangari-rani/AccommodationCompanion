package com.acc.sys.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acc.sys.model.Model;
import com.acc.sys.repository.UserRepository;

@Service
public class Userservice {
	
	@Autowired
	UserRepository userRepo;

	public boolean loginVer(String em, String ps) {
		Model m=userRepo.findByEmail(em);
		if(m.getEmail().equals(em) && m.getPassword().equals(ps)) {
			return true;
		}
		else {
			System.out.println(m.getEmail());
			System.out.println(m.getPassword());
			return false;
		}
	}
	
	public boolean addUser(Model model) {
		userRepo.save(model);
		return true;
		
	}
	
	
}