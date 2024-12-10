package com.acc.sys.services;

import java.util.List;

import com.acc.sys.model.Owner;

public interface OwnerService {
	Owner createOwner(Owner owner);

    List<Owner> getAllOwner();

    boolean deleteOwner(Long id);

    Owner getOwnerById(Long id);

    Owner updateOwner(Long id, Owner owner);

}
