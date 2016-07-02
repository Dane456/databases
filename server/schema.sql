CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT, 
  content varchar(200),
  username varchar(20),
  createdAt DATETIME DEFAULT NULL,
  chatroomID int,
  FOREIGN KEY (chatroomID),
  PRIMARY KEY (id)
);

CREATE TABLE chatrooms (
  id int NOT NULL AUTO_INCREMENT,
  roomName varchar(20),
  message_id int,
  FOREIGN KEY(message_id),
  PRIMARY KEY (id)
)

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u -p root <server/schema.sql
 *  to create the database and the tables.*/

