package com.acc.sys.controller;

import com.acc.sys.model.Owner;
import com.acc.sys.services.OwnerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000",
		"https://accomodation-companion-mx31.vercel.app/"})
@RestController
@RequestMapping("/api/v1/")
public class OwnerController {

    private final OwnerService ownerService;

    public OwnerController(OwnerService ownerService) {
        this.ownerService = ownerService;
    }

    @PostMapping("/owner")
    public Owner createOwner(@RequestBody Owner owner) {
        return ownerService.createOwner(owner);
    }

    @GetMapping("/owner")
    public List<Owner> getAllOwner() {
        return  ownerService.getAllOwner();
    }

    @DeleteMapping("/owner/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteOwner(@PathVariable Long id) {
        boolean deleted = false;
        deleted = ownerService.deleteOwner(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/owner/{id}")
    public ResponseEntity<Owner> getOwnerById(@PathVariable Long id) {
        Owner owner = null;
        owner = ownerService.getOwnerById(id);
        return ResponseEntity.ok(owner);
    }
    
    

    @PutMapping("/owner/{id}")
    public ResponseEntity<Owner> updateOwner(@PathVariable Long id,
                                                   @RequestBody Owner owner) {
        owner = ownerService.updateOwner(id, owner);
        return ResponseEntity.ok(owner);
    }

}