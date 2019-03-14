### Schema

DROP DATABASE IF EXISTS todos_db;

CREATE DATABASE todos_db;

USE todos_db;

CREATE TABLE todos
(
	id int NOT NULL AUTO_INCREMENT,
	todo varchar(255) NOT NULL,
	done BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);