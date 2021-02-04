const fs = require('fs');
const axios = require('axios');
const process = require('process');

//Step 1
// In step1.js, write a function, cat.
// It should take one argument, path, and it should read the file with that path, and print the contents of that file.

function cat(path){
    fs.readFile(path, 'utf-8', function(err, data){
        if(err){
            console.log(err);
                process.exit(1);
        }
        console.log(`file contents: ${data}`)
    })
}

// cat('one.txt');

// Then, write some code that calls that function, allowing you to specify the path argument via the command line.
//If you give it the path of a non-existent file, it should print that error and halt the script execution:

let argv = process.argv;

function cat2(argv){
    fs.readFile(argv[2], 'utf-8', function(err, data){
                if(err){
                    console.log("ERROR:", err.code);
                    process.exit(1);
                }
                console.log(`file contents: ${data}`)
            })
        }

// cat2(argv);

//Step 2
//Part 1

// let url = "https://www.google.co.uk/";

async function webCat(url){
        res = await axios.get(url)
        .then(res => {
            console.log(res)
        })
        .catch(e =>{
            console.log(`ERROR: ${e}`)
        })
                }

// webCat(url);


//Part 2
//Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.

let argv = process.argv;


function catOrwebCat(){
    if(argv[2].slice(0,4) == 'https'){
        webCat(argv[2]);
    }
    else{
        cat2(argv);
    }
}

catOrwebCat();




