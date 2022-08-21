--this file will create 
-- 1. the structiure of the pets table and
-- 2. several rows of test / seed data to work with (i.e. several specific pets)

--By doing this in one file, we only need to run one sqlite3 to reinitialise (restart) the whole DB

--this will remove the pets table so ed don't even have rm the database each time

DROP TABLE IF EXISTS pets;

CREATE TABLE pets (

    id INTEGER PRIMARY KEY AUTOINCREMENT, --manage IDs for us; so we dont have to specify them
    name TEXT,
    species TEXT,
    description TEXT,
    roundness INTEGER,
    alive BOOLEAN,
    age INTEGER,
    image_url TEXT,
    owner_id INTEGER --Each pet knows its owner. We MUST name this field using the singular of the other table name because of Active record conventions
    --This allows pets to belong to an owner, and pet to access their pets.


);

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
    VALUES (
        'Minnie',
        'Dog',
        'A beautiful salt and pepper minature Schanuzer',
        5,
        1, --true
        9,
        "https://place-puppy.com/300x300"
    );

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
    VALUES (
        'Clarence Boddicker',
        'Human',
        'B****** Leave!',
        8,
        0, --true
        40,
        "https://thenaturalaristocrat.com/wp-content/uploads/2021/06/kurtwood-smith-clarence-boddicker-robocop.jpeg"
    );

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
    VALUES (
        'Kermit',
        'Desert Frog',
        'Extremely round, also very sneaky.',
        10,
        1, --true
        125,
        "https://www.treehugger.com/thmb/cbnratyxBfh6Cs0a57JVdtDII58=/485x364/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2014__06__desert-rain-frog-e7ce3707312242a6bf84ea30af6ab3a1.png"
    );