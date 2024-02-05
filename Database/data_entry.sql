INSERT INTO user(username,password,name,mobile,emailid) VALUES('omkar123','omkar123','omkar divate',8087720618,'omkarrdivate321@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('kunal123','lunal123','kunal hole',9433720618,'kunalhole@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('raj123','raj123','raj lohar',7075720618,'rajlohar321@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('aditya123','aditya123','aditya pawar',9098620618,'adityap@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('sakha123','sakha123','sakharam',8065900618,'sakharam@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('preeti123','preeti123','preeti verma',8087729867,'preetiverma@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('shradha123','shradha123','shradha kapoor',9090820618,'shradhakp@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('vikram123','vikram123','vikram durgude',7075720669,'vikramd@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('parth123','parth123','parth pawar',8084756618,'parthpawar@gmail.com');
INSERT INTO user(username,password,name,mobile,emailid) VALUES('sakshi123','sakshi123','sakshi dikshit',8364720611,'sakshid@gmail.com');


INSERT INTO mess(messname,ownername,password,mobile,messtime,state,city,landmark) VALUES('sukhswad','pankaj gupta','pankajg123',8095632154,'9am-8pm','Maharashtra','Pune','Model colony');
INSERT INTO mess(messname,ownername,password,mobile,messtime,state,city,landmark) VALUES('More mess','Kavit more','kavita123',9267632154,'9am-8pm','Maharashtra','Pune','Gokhale nagar');
INSERT INTO mess(messname,ownername,password,mobile,messtime,state,city,landmark) VALUES('Ganpat','Anuj bamb','ajun123',9322632175,'9am-8pm','Maharashtra','Pune','SB road');

INSERT INTO dailymenu VALUES(1,'Vadapav',15 );
INSERT INTO dailymenu VALUES(1,'Idli sambar', 30 );
INSERT INTO dailymenu VALUES(1,'Vada Sambar',60 );
INSERT INTO dailymenu VALUES(1,'Pavbhaji',80 );
INSERT INTO dailymenu VALUES(1,'Punjabi Thali',170 );

INSERT INTO todaysmenu VALUES(1,'Matki,soyabean,dal-rice,jalebi,salad,lassi',100 , true); 

INSERT INTO messplanned VALUES(1,1,'2 bhaji, 3 chapati, sweet, salad', 3400 );
INSERT INTO messplanned VALUES(1,3,'2 bhaji, 3 chapati, dal-rice, sweet, salad', 10800 ); 

INSERT INTO reviews(userid,messid,rating,review) VALUES(1, 1, 4 , 'very good taste');
INSERT INTO reviews(userid,messid,rating,review) VALUES(2, 1, 3 , 'deliciuos food');
INSERT INTO reviews(userid,messid,rating,review) VALUES(3, 1, 3 , 'love it');
INSERT INTO reviews(userid,messid,rating,review) VALUES(4, 1, 5 , 'fast service');
INSERT INTO reviews(userid,messid,rating,review) VALUES(5, 1, 4 , 'worth it');