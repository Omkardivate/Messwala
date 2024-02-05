DROP DATABASE IF EXISTS messwala1;
CREATE DATABASE messwala1; 
USE messwala1;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS mess;
DROP TABLE IF EXISTS dailymenu;
DROP TABLE IF EXISTS todaysmenu;
DROP TABLE IF EXISTS messplanned;
DROP TABLE IF EXISTS reviews;


CREATE TABLE user (
 userid int auto_increment primary key,
 username varchar(30) not null unique,
 password varchar(30) not null ,
 name varchar(50)not null,
 mobile bigint not null unique,
 emailid varchar(50) not null unique
);


CREATE TABLE mess (
  messid  int auto_increment primary key,
  messname  varchar(30) not null,
  ownername  varchar(30) not null,
  password varchar(30) not null ,
  mobile bigint not null unique,
  rating float not null default 0,
  messtime  varchar(30) not null ,
  state varchar(30) not null, 
  city varchar(30) not null, 
  landmark varchar(30) not null
);


CREATE TABLE dailymenu
( 
   messid int ,  
   menu varchar(50) not null ,
   price float not null,

   foreign key(messid) references mess(messid) ON DELETE CASCADE
);


CREATE TABLE todaysmenu
( 
   messid int primary key,  
   menu varchar(500) not null ,
   price float not null,
   avaibility bool,

   foreign key(messid) references mess(messid) ON DELETE CASCADE
);


CREATE TABLE messplanned
( 
   messid int,  
   duration int not null ,
   messplan varchar(150) not null,
   charges float not null,
   
   foreign key(messid) references mess(messid) ON DELETE CASCADE
);


CREATE TABLE reviews   
(
   reviewid int auto_increment unique,
   userid int not null,  
   messid int not null,  
   rating int not null ,
   review varchar(150),
   check(rating<=5 and rating>0),

   foreign key(userid) references user(userid) ON DELETE CASCADE,
   foreign key(messid) references mess(messid) ON DELETE CASCADE,
   primary key(userid,messid)  
);



DROP TRIGGER IF EXISTS avgreview;
delimiter $
CREATE TRIGGER avgreview AFTER INSERT ON reviews FOR EACH ROW
BEGIN
    SELECT AVG(rating) INTO @avgrt from reviews where messid = new.messid;
    UPDATE mess SET rating= @avgrt where messid =new.messid;
end $
delimiter ;