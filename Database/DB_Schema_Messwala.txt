DROP DATABASE IF EXISTS Messwala;
CREATE DATABASE Messwala; 
USE Messwala;

DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Mess;
DROP TABLE IF EXISTS Daily_menu;
DROP TABLE IF EXISTS Todays_menu;
DROP TABLE IF EXISTS Messplanned;
DROP TABLE IF EXISTS Reviews;


CREATE TABLE User (
  userid INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(30) NOT NULL,
  fname VARCHAR(50) NOT NULL,
  mname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL UNIQUE,
  mobile BIGINT NOT NULL UNIQUE,
  emailid VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Mess (
  messid INT AUTO_INCREMENT PRIMARY KEY,
  messname  VARCHAR(30) NOT NULL,
  ownername  VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  mobile BIGINT NOT NULL UNIQUE,
  rating FLOAT NOT NULL DEFAULT 0,
  messtime  VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL, 
  city VARCHAR(30) NOT NULL, 
  landmark VARCHAR(30) NOT NULL
);

CREATE TABLE Daily_menu ( 
   messid INT,  
   menu VARCHAR(70) NOT NULL,
   price FLOAT NOT NULL,
   FOREIGN KEY(messid) REFERENCES Mess(messid) ON DELETE CASCADE
);

CREATE TABLE Todays_menu ( 
   messid INT NOT NULL UNIQUE,  
   menu VARCHAR(500) NOT NULL,
   price FLOAT NOT NULL,
   avaibility BOOL,
   FOREIGN KEY(messid) REFERENCES Mess(messid) ON DELETE CASCADE
);

CREATE TABLE Messplanned ( 
   messid INT,  
   duration INT NOT NULL,
   messplan VARCHAR(150) NOT NULL,
   charges FLOAT NOT NULL,
   FOREIGN KEY(messid) REFERENCES Mess(messid) ON DELETE CASCADE
);

CREATE TABLE Reviews   
(
   reviewid INT AUTO_INCREMENT UNIQUE,
   userid INT NOT NULL,  
   messid INT NOT NULL,  
   rating INT NOT NULL,
   review VARCHAR(150),
   CHECK(rating<=5 AND rating>0),
   FOREIGN KEY(userid) REFERENCES User(userid) ON DELETE CASCADE,
   FOREIGN KEY(messid) REFERENCES Mess(messid) ON DELETE CASCADE,
   PRIMARY KEY(userid,messid)  
);


DROP TRIGGER IF EXISTS avgreview;
delimiter $
CREATE TRIGGER avgreview AFTER INSERT ON reviews FOR EACH ROW
BEGIN
    SELECT AVG(rating) INTO @avgrt from reviews where messid = new.messid;
    UPDATE mess SET rating= @avgrt where messid =new.messid;
end $
delimiter ;