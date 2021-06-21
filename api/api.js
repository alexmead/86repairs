const cors = require("cors");
const express = require("express");
const Equipment = require("./equipmentData");
const fs = require('fs');

const app = express();

app.use(cors());
app.options("*", cors());

app.get("/equipment", (req, res) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum > 7) {
      res.status(500).json({ error: "Ah jeez!" });
    } else {
      res.json(Equipment);
    }
  }, 800);
});

// Using url parameters to deliver the proper json elements
// localhost:8100/equipment_manufacturer?manufacturer=Vulcan

app.get("/equipment_manufacturer", (req, res) => {
  setTimeout(() => {
    // Parse the query URL to get the parameter
    const manufacturer = req.query.manufacturer
    var limited_list = []


    for (var i = 0; i < Equipment.length; i++){
      if (Equipment[i].manufacturer === manufacturer){
        limited_list.push(Equipment[i])
      }
    }
    res.json(limited_list)    
  }, 800);
});

// {
//   problem: "Uh oh, this thing is broken",
//   equipmentSerial: "12345"
// }


app.get("/submit_ticket", (req, res) => {
  setTimeout(() => {
    // Parse the query URL to get the parameters "problem", "equipmentSerial". I assume equipment serial is unique, therefore can be used for a filename
    // Should add parameter checking in here for existance. Also, there maybe unique formating issues that come up with serial numbers
    const problem = req.query.problem
    const equipmentSerial = req.query.equipmentSerial
    const ticket = {
      "problem" : problem,
      "equipmentSerial" : equipmentSerial
    }
    // Save ticket to file
    // 
    let data = JSON.stringify(ticket)
    let filename = equipmentSerial + ".json"
    fs.writeFileSync(filename, data)    
    // Return value of json to user to indicate successful submission
    res.json([ticket])
    
  }, 800);
});

app.get("/check_submit_ticket", (req, res) => {
  setTimeout(() => {
    // Parse the query URL to get the parameters "problem", "equipmentSerial". I assume equipment serial is unique, therefore can be used for a filename
    // Should add parameter checking in here for existance. Also, there maybe unique formating issues that come up with serial numbers
    const problem = req.query.problem
    const equipmentSerial = req.query.equipmentSerial
    const ticket = {
      "problem" : problem,
      "equipmentSerial" : equipmentSerial
    }
    // Loop through equipment manufacturing list to check for serial numbers
    // Thought: is there a "presort" that could speed this API call?
    var checkTest = false;
    for (var i = 0; i < Equipment.length; i++){
      // Need to have checks for existance of the field "serial_number"
      if (Equipment[i].serial_number === equipmentSerial){// replying here on JavaScript type conversions, I would not do this in production.
        checkTest = true;
        // Add in break here to short-circuit loop
      }
    }
    if (checkTest){
      // Serial is in the list of equipment.
      // Save ticket to file
      // More thought needs to go into checking for proper filename formatting for future retrevial. How does the complete path work. A DB would likely be a better choice.
      let data = JSON.stringify(ticket)
      let filename = equipmentSerial + ".json"
      fs.writeFileSync(filename, data)    
      // Return value of json to user to indicate successful submission
      res.json([ticket])
    } else {
      // Submitted serial is not in the list of equipment, report error to user
      const result = {
        "success" : "false"
      }
      res.json([result])
    }
    
  }, 800);
});

// For testing we can build a set of examples based on the Equipment data structure to exercise all the possible behaviours. 
// Missing Equipmetn serials?
// Spell checking? "dash" errors?
// 

const port = 8100;

app.listen(port, () => {
  console.log(`Listening on ${port}...`);
});
