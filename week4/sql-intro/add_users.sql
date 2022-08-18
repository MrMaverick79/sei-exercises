--This is the 'Create' of Crud. We want to add some specific user records to our user table.
--ie add some rows

-- This is "seed" data, data that can be pre-loaded into the website
-- You can use this to test the sire

INSERT INTO users ( id, name, email, password, profile_image, verified, age)
    VALUES(
        1, 
        'Brendan',
        'brendan@gmail.com',
        'chicken',
        'http://placekitten.com/200/200',
        1, --this is still a booleon 1 is true
        100
    );

    INSERT INTO users ( id, name, email, password, profile_image, verified, age)
    VALUES(
        2, 
        'Kris',
        'kris@gmail.com',
        'chicken',
        'http://placekitten.com/200/200',
        0, --this is still a booleon 0 is false
        25
    );

    INSERT INTO users ( id, name, email, password, profile_image, verified, age)
    VALUES(
        3, 
        'Jeremy',
        'jeremy@gmail.com',
        'chicken',
        'http://placekitten.com/100/200',
        1, --this is still a booleon 1 is true
        35
    );