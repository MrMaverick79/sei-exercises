

DROP TABLE IF EXISTS owners;

CREATE TABLE owners(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT

);

INSERT INTO owners( name, email) VALUES ( 'Brendan', 'brendan@newtrick.com');
INSERT INTO owners( name, email) VALUES ( 'Alice', 'alice@newtrick.com');
INSERT INTO owners( name, email) VALUES ( 'Jenny', 'jenny@newtrick.com');
INSERT INTO owners( name, email) VALUES ( 'Mo', 'mo@newtrick.com');