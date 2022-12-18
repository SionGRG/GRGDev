// Imports
import {Grid} from './modules/grid-modules.js';

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
    * ************************ */
    //  Display the technical skills

    //  Display the software stack
    let SW_Grid = new Grid("files/images/bio/SWStack/", "row-cols-5 c_SWStack")
    SW_Grid.CreateCardElementsIMG(data.SoftwareStack, "png");
    SW_Grid.RenderOnId("acr_SWStack");

    //  Display the languages
    let Lang_Grid = new Grid("files/images/bio/Languages/", "row-cols-5 c_Languages");
    Lang_Grid.CreateListElementsIMG(data.Languages, "png");
    Lang_Grid.RenderOnId("acr_Lang");
}