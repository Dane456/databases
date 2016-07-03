-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `message` VARCHAR(200) NULL DEFAULT NULL,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT NULL,
  `chatroomID` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'chatroom'
-- 
-- ---

DROP TABLE IF EXISTS `chatroom`;
    
CREATE TABLE `chatroom` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (chatroomID) REFERENCES `chatroom` (`id`);
ALTER TABLE `chatroom` ADD FOREIGN KEY (messageID) REFERENCES `messages` (`id`);




-- CREATE DATABASE chat;

-- USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id int NOT NULL AUTO_INCREMENT, 
--   content varchar(200),
--   username varchar(20),
--   createdAt DATETIME DEFAULT NULL,
--   chatroomID int,
--   FOREIGN KEY (chatroomID),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE chatrooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomName varchar(20),
--   message_id int,
--   FOREIGN KEY(message_id),
--   PRIMARY KEY (id)
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u -p root <server/schema.sql
 *  to create the database and the tables.*/

