//fetch( '../Data/Bio/txt.json' )
//const txt = '{"name":"John", "age":30, "city":"New York"}'

LoadBioData().catch(function (err) {
    // handle errors
    console.log(err)
});

async function LoadBioData() {
    // fetch the json file
    response = await fetch( "../Data/Bio/BioData.json" )
    if (response.status !== 200) {
        // For the github pages option
        response = await fetch( "../GRGDev/Data/Bio/BioData.json" );
    }
    // Format into json data
    const data = await response.json();

    /* ***********************
        Display the json data 
    */
    //  Display the technical skills

    //  Display the software stack
    let SW_Icon_Location = "files/images/bio/SWStack/";
    let text_SWStack = "<div class='row c_SWStack'>";
    for (let i = 0; i < data.SoftwareStack.length; i++) {
        text_SWStack += "<div class='col " + data.SoftwareStack[i].class + "'><div class='card'><object class='card-img-top' data='" + SW_Icon_Location + data.SoftwareStack[i].icon + ".svg' alt='" + data.SoftwareStack[i].name + " icon'></object><div class='card-body'><h5 class='card-title'>" + data.SoftwareStack[i].name + "</h5><p class='card-text'>" + data.SoftwareStack[i].details + "</p></div></div></div>";
    }
    text_SWStack += "</div>";
    document.getElementById("acr_SWStack").innerHTML = text_SWStack;

    //  Display the languages
    let text_lang = "<ul>";
    for (let i = 0; i < data.Languages.length; i++) {
        text_lang += "<li>" + data.Languages[i].name + "</li>";
    }
    text_lang += "</ul>";
    document.getElementById("acr_Lang").innerHTML = text_lang;
}