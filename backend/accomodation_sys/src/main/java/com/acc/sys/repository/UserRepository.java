package com.acc.sys.repository;
import com.acc.sys.model.Model;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<Model,Integer>{
	public Model findByEmail(String email);

}