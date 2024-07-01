import React, { useState } from 'react';

const AddSkill = () => {
    const [name, setName] = useState("")

    const addSkill = async e => {
        e.preventDefault();
        
        try {
            const reqBody= { name }
            const response = await fetch("http://localhost:5000/skills",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(reqBody)
            });

            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    };

    return(
        <>
        <form onSubmit={addSkill}>
            <label htmlFor="addSkillInput">Add Skill</label>
            <input
            id="addSkillInput"
            type="text"
            onChange={e => setName(e.target.value)}
            />
            <button
            disabled={name.length === 0 }
            >Send</button>
        </form>
    </>
    )
}

export default AddSkill;