CREATE DATABASE seinfeld_db;
USE seinfeld_db;

CREATE TABLE actors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    coolness_points INT,
    attitude VARCHAR(20)
);

INSERT INTO actors
    (name, coolness_points, attitude)
  VALUES
    ('Jerry Seinfeld', 8, 'loveable'),
    ('Cosmo Kramer', 5, 'craziest'),
    ('George Costanza', 9, 'neurotic'),
    ('Elaine Benes', 7, 'introspective');

SELECT * FROM actors;
