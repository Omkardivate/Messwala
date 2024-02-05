INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('omkar123','omkar123','Omkar','Rajendra','Divate',8087720618, 'omkarrdivate321@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('kunal123','lunal123','Kunal','Sunil','Hole',9433720618,'kunalhole@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('raj123','raj123','Raj','Kailas','Lohar',7075720618,'rajlohar321@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('aditya123','aditya123','Aditya','Ravindra','Pawar',9098620618,'adityap12@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('preeti123','preeti123','Preeti','Suresh','Verma',8087729867,'preetiverma34@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('shradha123','shradha123','Shradha','Ajay','Tiwari',9090820618,'shradhatiwari190@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('vikram123','vikram123','Vikram','Vikas','Durgude',7075720669,'vikramd67@gmail.com');
INSERT INTO User(username, password, fname, mname, lname, mobile, emailid) VALUES('parth123','parth123','Parth','Ravindra','Pawar',8084756618,'parthpawar@gmail.com');


INSERT INTO Mess(messname, ownername, password, mobile, messtime, state, city, landmark) VALUES('Sukhswad','Pankaj Gupta','pankajg123',8095632154,'9am-8pm','Maharashtra','Pune','Model colony');
INSERT INTO Mess(messname, ownername, password, mobile, messtime, state, city, landmark) VALUES('More Mess','Kavita More','kavita123',9267632154,'9am-8pm','Maharashtra','Pune','Gokhale nagar');
INSERT INTO Mess(messname, ownername, password, mobile, messtime, state, city, landmark) VALUES('Ganpat Mess','Anuj Patil','ajun123',9322632175,'9am-8pm','Maharashtra','Pune','SB road');

INSERT INTO Daily_menu VALUES(1,'Vadapav',15 );
INSERT INTO Daily_menu VALUES(1,'Idli Sambar',30 );
INSERT INTO Daily_menu VALUES(3,'Vada Sambar',60 );
INSERT INTO Daily_menu VALUES(2,'Pavbhaji',80 );
INSERT INTO Daily_menu VALUES(2,'Punjabi Thali',170 );

INSERT INTO Todays_menu VALUES(1,'Matki, Soyabean, Dal-rice, Jalebi, Salad, Lassi' ,100 ,true); 

INSERT INTO Messplanned VALUES(1,1,'2 Bhaji, 3 Chapati, Sweet, Salad',1200 );
INSERT INTO messplanned VALUES(1,3,'2 Bhaji, 3 Chapati, Dal-rice, Sweet, Salad',1550 ); 

INSERT INTO Reviews(userid, messid, rating, review) VALUES(1,1,4,'Very good taste');
INSERT INTO Reviews(userid, messid, rating, review) VALUES(2,1,3,'Deliciuos food');
INSERT INTO Reviews(userid, messid, rating, review) VALUES(3,1,3,'Love it');
INSERT INTO Reviews(userid, messid, rating, review) VALUES(4,1,5,'Fast service');
INSERT INTO Reviews(userid, messid, rating, review) VALUES(5,1,4,'Worth it'); 