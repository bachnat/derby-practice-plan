--this isn't used firectly - just to write commands in a format that's easier to see and then can copy paste into the command line 
CREATE DATABASE practiceplans;

CREATE TABLE drills(
    drill_id SERIAL PRIMARY KEY, 
    name VARCHAR(255),
    description VARCHAR(255)
); 

CREATE TABLE skills(
    skill_id SERIAL PRIMARY KEY, 
    name VARCHAR(255)
); 

CREATE TABLE practices(
practice_id SERIAL PRIMARY KEY,
practice_name VARCHAR(100),
practice_date date,
skill_level VARCHAR(15),
leader VARCHAR(30),
notes VARCHAR(500)
);