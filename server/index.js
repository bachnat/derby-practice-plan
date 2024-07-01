const express = require("express");
const cors = require("cors");    ///cross origin stuff

const app = express();
const pool = require("./db");     ////this brings in the Pool stuff in db.js. allows us to run queries with postgres

app.use(cors())
app.use(express.json()); ///this allows us to access json data



///////  ROUTES  ///////
//create a drill
app.post("/drills", async(request, response) => {
    try{
        const { name } = request.body;

        //await - waits for function to complete before continuing
        const newDrill = await pool.query("INSERT INTO drills (name) VALUES($1) RETURNING *", [name]);
        //////INSERT INTO drills (description) VALUES($1) RETURNING * is SQL being sent to database
        response.json(newDrill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}); 

app.get("/drills", async(request, response) => {
    try{
        const allDrills = await pool.query("SELECT * FROM drills");
        console.log(allDrills);
        response.json(allDrills.rows);
        
    } catch (err) {
        console.error(err.message);
    } 
});

app.get("/drills/:id", async(request, response) => {
    try{
        const { id } = request.params; ////this gets the id from the URL in /todos/:id (which is in request.params)
        const drill =  await pool.query("SELECT * FROM drills WHERE drill_id = $1", [id]);
        response.json(newDrill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

/////// EDIT NAME
app.put("/drills/:id", async(request, response) => {
    try{
        const { id } = request.params; /// notice this is the same from the GET code, because we need the ID to get it 
        const { name } = request.body.name; /// notice this is the same from the POST code, because we're sending a new name 
        const { description } = request.body.description;
        const { duration } = request.body.duration;
        // console.log('request.body is');
        // console.log(request.body);
        // console.log(typeof request.body);
        // console.log(request.body.description);
        // console.log(description);

        const updateDrill = await pool.query("UPDATE drills SET name = $2, description = $3, duration = $4 WHERE drill_id = $1", [id, name, description,duration]);

        response.json("Drill updated.");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/drills/:id", async(request, response) => {
    try{
        const { id } = request.params; ////this gets the id from the URL in /todos/:id (which is in request.params)
        const deleteDrill =  await pool.query("DELETE FROM drills WHERE drill_id = $1", [id]);
        response.json("Drill deleted.");
    } catch (err) {
        console.error(err.message);
    }
});

////////////
//////////// SKILLS
////////////
app.post("/skills", async(request, response) => {
    try{
        const { description } = request.body;

        const newSkill = await pool.query("INSERT INTO skills (name) VALUES($1) RETURNING *", [description]);
        response.json(newSkill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
}); 

app.get("/skills", async(request, response) => {
    try{
        const allSkills = await pool.query("SELECT * FROM skills");
        response.json(allSkills.rows);
    } catch (err) {
        console.error(err.message);
    } 
});

app.get("/skills/:id", async(request, response) => {
    try{
        const { id } = request.params;
        const skill =  await pool.query("SELECT * FROM skills WHERE skill_id = $1", [id]);
        response.json(skill.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/skills/:id", async(request, response) => {
    try{
        const { id } = request.params; 
        const { name } = request.body; 
        const updateSkill = await pool.query("UPDATE skills SET name = $1 WHERE skill_id = $2", [name, id]);

        response.json("Skill updated.");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/skills/:id", async(request, response) => {
    try{
        const { id } = request.params; 
        const deleteSkill =  await pool.query("DELETE FROM skills WHERE skill_id = $1", [id]);
        response.json("Skill deleted.");
    } catch (err) {
        console.error(err.message);
    }
});


///////Runs server on port 5000
app.listen(5000, () => {
    console.log("Server started on port 5000");
});

module.exports = pool;