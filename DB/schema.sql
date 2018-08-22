CREATE DATABASE eatburger_db;

USE eatburger_db;

CREATE table burger(
id int auto_increment NOT NULL,
name VARCHAR (200) NOT NULL,
devoured BOOLEAN default false,
primary key(id)
);