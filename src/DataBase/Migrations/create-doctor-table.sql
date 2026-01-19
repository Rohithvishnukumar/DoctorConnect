Create table Doctor(

id INT Primary key auto_increment,
name varchar(200) not null,
specialization varchar(400) not null,
email varchar(100) not null unique
);