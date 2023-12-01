// Imports
import { ProjectCard } from './../modules/portfolio-modules.js';

LoadPortfolioData().catch(function (err) {
    // handle errors
    console.log(err)
});

async function LoadPortfolioData() {
    // fetch the json file
    let response = await fetch("../Data/Portfolio/PortfolioData.json")
    if (response.status !== 200) {
        // For the github pages option
        response = await fetch("../GRGDev/Data/Portfolio/PortfolioData.json");
    }
    // Format into json data
    const data = await response.json();

    /* ***********************
        Display the json data 
    * ************************ */
    let portfolioData = "";
    //    for(let i = 0; i < data.PortfolioProjects.length(); i++)
    for (let i in data.PortfolioProjects) {
        // Create a Card for every project
        let projCard = new ProjectCard("containerProj", data.PortfolioProjects[i].ID)

        // From the project type and select the content for it
        projCard.CreateProjectTitleAndType(data.PortfolioProjects[i].Title, data.PortfolioProjects[i].Type);

        // Select the data to put in the project card
        projCard.CreateProjectInfoBrief(data.PortfolioProjects[i].Info.Brief, data.PortfolioProjects[i].Info.Thumbnail);

        // Display the project details
        projCard.CreateProjectDetails(data.PortfolioProjects[i].Info.Details);
        
        // Create a gallery for the project if it has one
        projCard.CreateProjectGallery(data.PortfolioProjects[i].Info.Gallery);

        // Select which tabs to put in the gallery 

        portfolioData += projCard.RenderOutput();
    }

    // Render the Data to the HTML Dom element by the specified ID
    document.getElementById("PortfolioProjects").innerHTML = portfolioData;
}