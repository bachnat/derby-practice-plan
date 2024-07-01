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