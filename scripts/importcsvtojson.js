const csvFilePath= process.argv[2];
const outJson = process.argv[3];
const csv= require('csvtojson');
var i = 0;
const heroes = [];
csv({
    "includeColumns" : [ "herolink","fullname","strength","speed","durability","power","combat","alignment","gender","race" ] 
})
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    jsonObj.idHero=i++
    jsonObj.heroName = jsonObj.herolink;
    jsonObj.strength = parseInt(jsonObj.strength);
    jsonObj.speed = parseInt(jsonObj.speed);
    jsonObj.durability = parseInt(jsonObj.durability);
    jsonObj.power = parseInt(jsonObj.power);
    jsonObj.combat = parseInt(jsonObj.combat);
    heroes.push(jsonObj);
})
.on('done',(error)=>{
    require('fs').writeFile(
        outJson,
        JSON.stringify(heroes,null,4),(err) => {
                if(err)console.log(err);
                process.exit(0)
        }
    );
}) 



