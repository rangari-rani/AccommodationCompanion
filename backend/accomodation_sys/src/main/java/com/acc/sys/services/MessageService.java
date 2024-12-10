package com.acc.sys.services;

import java.util.List;

import com.acc.sys.model.Message;

public interface MessageService {
	Message createMessage(Message message);

    List<Message> getAllMessage();

    boolean deleteMessage(Long id);

    Message getMessageById(Long id);

    Message updateMessage(Long id, Message message);

}
