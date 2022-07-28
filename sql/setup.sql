-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists fruits;

CREATE table fruits (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

INSERT INTO fruits (name, color) VALUES 
    ('apple', 'red'),
    ('orange', 'orange'),
    ('pineapple', 'yellow'),
    ('grape', 'purple'),
    ('strawberry', 'red');