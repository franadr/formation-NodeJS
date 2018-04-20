const csv = require('csv');
const fs = require('fs');

// Prepare parameters
if(process.argv.length<4){
    console.error("Input/output files must be specified in script parameter");
    process.exit(1);
}

const inputCsvFilePath = process.argv[2];
console.log(`Input file defined : ${inputCsvFilePath}`);

const outputJsonFilePath = process.argv[3];
console.log(`Output file set to : ${outputJsonFilePath}`);

// Read file asynchronously 
fs.readFile(inputCsvFilePath, (err, inputCsvFile) => {
    if(err){
        console.error(`Error when reading input file : ${err}`);
        process.exit(1);
    }

    // Parse csv file
    console.info("Start parsing ...")
    csv.parse(inputCsvFile, {"delimiter":";"}, (err,data) => {

            // Create heroes in json format
            let heroesJson = [];
            for (let index = 1; index < data.length; index++) {
                const hero = {
                    idHero : index,
                    heroName : data[index][2],
                    intelligence : parseInt(data[index][4]),
                    strength : parseInt(data[index][5]),
                    speed : parseInt(data[index][6]),
                    durability : parseInt(data[index][7]),
                    power : parseInt(data[index][8]),
                    combat : parseInt(data[index][9]),
                    fullName : data[index][10],
                    alignment : data[index][16],
                    gender : data[index][17],
                    race : data[index][18]
                }
                heroesJson.push(hero);
            }
    
            // Write output file
            fs.writeFile(outputJsonFilePath, JSON.stringify(heroesJson,null,4), 'utf8', (err) => {
                if(err){
                    console.error(`An error occured when writing output file : ${err}`);
                    process.exit(1);
                } 
                console.info("Conversion done !");
               
            });
        }
    );
});


