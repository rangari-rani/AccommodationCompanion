package com.acc.sys.services;

import com.acc.sys.entity.MessageEntity;
import com.acc.sys.model.Message;
import com.acc.sys.repository.MessageRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageServiceImpl implements MessageService{

    private MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @Override
    public Message createMessage(Message message) {
        MessageEntity messageEntity = new MessageEntity();

        BeanUtils.copyProperties(message, messageEntity);
        messageRepository.save(messageEntity);
        return message;
    }

    @Override
    public List<Message> getAllMessage() {
        List<MessageEntity> messageEntities
                = messageRepository.findAll();

        List<Message> message = messageEntities
                .stream()
                .map(msgs -> new Message(
                		msgs.getId(),
                		msgs.getName(),
                		msgs.getEmail(),
                		msgs.getMobile(),
                		msgs.getMsg()))
                
                .collect(Collectors.toList());
        return message;
    }

    @Override
    public boolean deleteMessage(Long id) {
        MessageEntity message = messageRepository.findById(id).get();
        messageRepository.delete(message);
        return true;
    }

    @Override
    public Message getMessageById(Long id) {
        MessageEntity messageEntity
                = messageRepository.findById(id).get();
        Message message = new Message();
        BeanUtils.copyProperties(messageEntity, message);
        return message;
    }

    @Override
    public Message updateMessage(Long id, Message message) {
        MessageEntity messageEntity
                = messageRepository.findById(id).get();
        messageEntity.setName(message.getName());
        messageEntity.setEmail(message.getemail());
        messageEntity.setMobile(message.getMobile());
        messageEntity.setMsg(message.getMsg());
        

        messageRepository.save(messageEntity);
        return message;
    }
}