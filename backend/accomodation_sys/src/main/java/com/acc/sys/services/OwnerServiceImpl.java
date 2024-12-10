package com.acc.sys.services;

import com.acc.sys.entity.OwnerEntity;
import com.acc.sys.model.Owner;
import com.acc.sys.repository.OwnerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OwnerServiceImpl implements OwnerService{

    private OwnerRepository ownerRepository;

    public OwnerServiceImpl(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
    }

    @Override
    public Owner createOwner(Owner owner) {
        OwnerEntity ownerEntity = new OwnerEntity();

        BeanUtils.copyProperties(owner, ownerEntity);
        ownerRepository.save(ownerEntity);
        return owner;
    }

    @Override
    public List<Owner> getAllOwner() {
        List<OwnerEntity> ownerEntities
                = ownerRepository.findAll();

        List<Owner> owner = ownerEntities
                .stream()
                .map(own -> new Owner(
                		own.getId(),
                		own.getName(),
                		own.getCategory(),
                		own.getPrice(),
                		own.getAddress(),
                		own.getdescription()))
                .collect(Collectors.toList());
        return owner;
    }

    @Override
    public boolean deleteOwner(Long id) {
        OwnerEntity owner = ownerRepository.findById(id).get();
        ownerRepository.delete(owner);
        return true;
    }

    @Override
    public Owner getOwnerById(Long id) {
        OwnerEntity ownerEntity
                = ownerRepository.findById(id).get();
        Owner owner = new Owner();
        BeanUtils.copyProperties(ownerEntity, owner);
        return owner;
    }

    @Override
    public Owner updateOwner(Long id, Owner owner) {
        OwnerEntity ownerEntity
                = ownerRepository.findById(id).get();
        ownerEntity.setName(owner.getName());
        ownerEntity.setCategory(owner.getCategory());
        ownerEntity.setPrice(owner.getPrice());
        ownerEntity.setAddress(owner.getAddress());
        ownerEntity.setdescription(owner.getdescription());

        ownerRepository.save(ownerEntity);
        return owner;
    }
}