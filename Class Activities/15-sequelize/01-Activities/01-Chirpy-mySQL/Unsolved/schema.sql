CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id INT AUTO_INCREMENT PRIMARY KEY,
  author VARCHAR(100),
  chirp  VARCHAR(100),
  time_created TIMESTAMP

);