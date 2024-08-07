//// NOT USED YET

/*
const app = express();
const pool = require("./db");     ////this brings in the Pool stuff in db.js. allows us to run queries with postgres

app.use(cors())
app.use(express.json());

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

app.put("/drills/:id", async(request, response) => {
    try{
        const { id } = request.params; /// notice this is the same from the GET code, because we need the ID to get it 
        const { name } = request.body; /// notice this is the same from the POST code, because we're sending a new description 
        const updateDrill = await pool.query("UPDATE drills SET name = $1 WHERE drill_id = $2", [name, id]);

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

*/