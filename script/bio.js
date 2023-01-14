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
    //  Display the Programming languages
    let grid_ProgLang = new Grid("files/images/bio/Programming/", "row-cols-6 c_ProgLang");
    grid_ProgLang.CreateListElementsIMG(data.ProgrammingLanguages, "png");
    grid_ProgLang.RenderOnId("acr_ProgLang");
    
    //  Display the Technical Skills
    let grid_TechSkills = new Grid(null, "row-cols-4 c_TechSkills");
    grid_TechSkills.CreateListElements(data.TechnicalSkills);
    grid_TechSkills.RenderOnId("acr_TechSkills")

    //  Display the software stack
    let grid_SW = new Grid("files/images/bio/SWStack/", "row-cols-5 c_SWStack")
    grid_SW.CreateCardElementsIMG(data.SoftwareStack, "png");
    grid_SW.RenderOnId("acr_SWStack");

    //  Display the languages
    let grid_Lang = new Grid("files/images/bio/Languages/", "row-cols-5 c_Languages");
    grid_Lang.CreateListElementsIMG(data.Languages, "png");
    grid_Lang.RenderOnId("acr_Lang");
}