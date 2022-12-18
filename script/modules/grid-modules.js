// A grid class that displays bootstrap cards as its elements

export class Grid {
    constructor(thumbnailsLocation, gridClass) {
        this.m_ThumbnailsLocation = thumbnailsLocation;
        this.m_Output = "<div class='row " + gridClass + "'>";
    }

    // Add all the data from the json file with SVG thumbnails
    CreateCardElementsSVG(dataArray) {
        for (let i = 0; i < dataArray.length; i++) {
            this.m_Output += "<div class='col " + dataArray[i].class + "'><div class='card'><object class='card-img-top' data='" + this.m_ThumbnailsLocation + dataArray[i].icon + ".svg' alt='" + dataArray[i].name + " icon'></object><div class='card-body'><h5 class='card-title'>" + dataArray[i].name + "</h5><p class='card-text'>" + dataArray[i].details + "</p></div></div></div>";
        }
    }

    /* Add all the data from the json file with image thumbnails i.e png, jpg, etc
     * the image format can be an fomart that is compatible with the html "img" tag
    */
    CreateCardElementsIMG(dataArray, imgFomart) {
        for (let i = 0; i < dataArray.length; i++) {
            this.m_Output += "<div class='col " + dataArray[i].class + "'><div class='card'><img class='card-img-top' src='" + this.m_ThumbnailsLocation + dataArray[i].icon + "." + imgFomart + "' alt='" + dataArray[i].name + " icon'><div class='card-body'><h5 class='card-title'>" + dataArray[i].name + "</h5><p class='card-text'>" + dataArray[i].details + "</p></div></div></div>";
        }
    }

    /* Add a list of items that have thumbnails in a grid 
    * the image format can be an fomart that is compatible with the html "img" tag
    */
   CreateListElementsIMG(dataArray, imgFomart) {
        for(let i = 0; i < dataArray.length; i++) {
            this.m_Output += "<div class='col'><div><img class='w_icon' src='" + this.m_ThumbnailsLocation + dataArray[i].icon + "." + imgFomart + "' alt='" + dataArray[i].name + " icon'><p>" + dataArray[i].name + "</p></div></div>";
        }
    }

    // Render the Data to the HTML Dom element by the specified ID
    RenderOnId(id_Name) {
        this.m_Output += "</div>";
        document.getElementById(id_Name).innerHTML = this.m_Output;
    }
}