//fetch( '../Data/Bio/txt.json' )
//const txt = '{"name":"John", "age":30, "city":"New York"}'

LoadBioData().catch(function (err) {
    // handle errors
    console.log(err)
});

async function LoadBioData() {
    // fetch the json file
    response = await (await fetch( '../Data/Bio/txt.json' )
    .catch(async function (err) {
        // For the github pages option
        response = await fetch( '../GRGDev/Data/Bio/txt.json' )
    }))
    const data = await response.json();
    // Display the json data
    document.getElementById("demo").innerHTML = data.name + ", " + data.age;
}

/*
fetch( '../Data/Bio/txt.json' )
.then(response => response.json())
.then(function (data) {
    // Display the json data
    document.getElementById("demo").innerHTML = data.name + ", " + data.age;
})
.catch(function (err) {
    // handle errors
    console.log(err)
}); */