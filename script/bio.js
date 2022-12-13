// Imports
import {Grid_Cards} from './modules/grid-modules.js';

LoadBioData().catch(function (err) {
    // handle errors
    console.log(err)
});

async function LoadBioData() {
    // fetch the json file
    let response = await fetch( "../Data/Bio/BioData.json" )
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
    let SW_Grid = new Grid_Cards("files/images/bio/SWStack/", "row-cols-5 c_SWStack")
    SW_Grid.UpdateElementsSVG(data.SoftwareStack);
    SW_Grid.UpdateElementsIMG(data.SoftwareStack, "png");
    SW_Grid.UpdateElementsIMG(data.SoftwareStack, "png");
    SW_Grid.UpdateElementsIMG(data.SoftwareStack, "png");
    SW_Grid.UpdateElementsIMG(data.SoftwareStack, "png");
    SW_Grid.UpdateElementsIMG(data.SoftwareStack, "png");
    SW_Grid.RenderOnId("acr_SWStack");

    //  Display the languages
    let text_lang = "<ul>";
    for (let i = 0; i < data.Languages.length; i++) {
        text_lang += "<li>" + data.Languages[i].name + "</li>";
    }
    text_lang += "</ul>";
    document.getElementById("acr_Lang").innerHTML = text_lang;
}