package com.acc.sys.controller;

import com.acc.sys.model.Message;
import com.acc.sys.services.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000",
"https://accomodation-companion-mx31.vercel.app"})
@RestController
@RequestMapping("/api/v1/")
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping("/message")
    public Message createMessage(@RequestBody Message message) {
        return messageService.createMessage(message);
    }

    @GetMapping("/message")
    public List<Message> getAllMessage() {
        return  messageService.getAllMessage();
    }

    @DeleteMapping("/message/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteMessage(@PathVariable Long id) {
        boolean deleted = false;
        deleted = messageService.deleteMessage(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/message/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable Long id) {
        Message message = null;
        message = messageService.getMessageById(id);
        return ResponseEntity.ok(message);
    }
    
    

    @PutMapping("/message/{id}")
    public ResponseEntity<Message> updateMessage(@PathVariable Long id, @RequestBody Message message) {
        message = messageService.updateMessage(id, message);
        return ResponseEntity.ok(message);
    }

}