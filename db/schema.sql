CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(255) NULL,
    devoured BIT NULL,
    PRIMARY KEY(id)
);