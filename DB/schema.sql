create database burgersDB;

use burgersDB;
DROP TABLE IF EXISTS burgers;

create table burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);