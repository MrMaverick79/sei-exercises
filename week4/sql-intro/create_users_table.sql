-- This file defines the structure for creating a new table called users 
-- It's also known as a schema

CREATE TABLE users (

    id INTEGER PRIMARY KEY, --make sure the values in the column are unique
    name TEXT,
    email TEXT,
    password TEXT, --dont' store plain text password
    profile_image TEXT, --likey a url
    verified BOOLEAN, --true or false
    age INTEGER --probably you would instead store this as a date field.

); -- Don't forget the semicolon