// A Portfolio Card class that displays the Data about a project in the Portfolio

export class ProjectCard {

    // Construct a Card for the project
    constructor(classes, projectID) {
        this.m_ID = projectID;
        this.m_Output = '<div class="' + classes + ' ">';
        this.m_Output += '<hr class="tLineProj">';
    }

    // From the project type and select the content for it
    CreateProjectTitleAndType(projectTitle, projectType) {
        this.m_Output += '<p class="typeProj">' + projectType + '</p> <h2 class="titleProj">' + projectTitle + '</h2> <div class="contentProj">';
    }

    // Select the data to put in the project card
    CreateProjectInfoBrief(dataArray, thumbnail) {
        this.m_Output += '<div style="background-image: url(\'' + thumbnail.Data.Link + '\'); background-repeat: no-repeat; background-position: center; background-size: 100% auto; margin: 15px 20px 5px; animation: up-down 30s ease-in-out infinite; animation-timing-function: cubic-bezier(0.42,0,0.58,1);"> <div class="briefProj">';
        
        for (let key in dataArray) {
            this.m_Output += '<p><span class="briefTitle">' + key + ': </span>' + dataArray[key] + '</p>';
        }
        
        this.m_Output += '</div></div>';
    }

    CreateProjectDetails(dataArray) {
        for (let key in dataArray) {
        this.m_Output += '<P class="detailsProj"><strong>' + key + ': </strong> ' + dataArray[key] + '</P>';
        }
    }

    // Create a gallery for the project if it has one
    CreateProjectGallery(galleryTabsArray) {
        // Start of the gallery
        this.m_Output += '<!-- Project Gallery --> <div class="galleryProj"> <button onclick="showGallery(\'' + this.m_ID + '_gBoxM\')" class="gTitle">&#x25A6; Gallery &#x25A6;</button> <!-- Documents, Images and videos about the project --> <div id="' + this.m_ID + '_gBoxM" class="gBox"> <div class="gBoxTabs">';
        
        for (let key in galleryTabsArray) {
            this.m_Output += '<button class="gBoxTab" onclick="openTab(event, \'' + 
            this.m_ID + '_gBoxC_' + key + '\')">' + key + '</button>';
            
        }
        
        this.m_Output += '</div>';
        
        for (let key in galleryTabsArray) {
            // Content window start
            this.m_Output += ' <div id="' + this.m_ID + '_gBoxC_' + key + '" class="gBoxContent"> <!-- ' + key + ' Content -->';
            
            // Tab Content
            switch(key)
            {
                case "Documentation":
                    this.m_Output += '<h3>' + key + '</h3> <div class="horizontal"> <ul class="DocCards">';              
                    
                    // Display the document cards for all the documents 
                    for(let doc of galleryTabsArray[key]) {
                        this.#Gallery_Document(doc.Type, doc.Data);
                    }

                    this.m_Output += '</ul>';
                    this.m_Output += '</div>';

                    // Displaying the document in a grid
                    /*
                    this.m_Output += '<h3>' + key + '</h3> <div class="row row-cols-6 DocCards">';
                    
                    // Display the document cards for all the documents 
                    for(let doc of galleryTabsArray[key]) {
                        this.#Gallery_Document(doc.Type, doc.Data);
                    }
                    this.m_Output += '</div>';
                    */
                    
                    break;

                case "Videos":
                    this.m_Output += '<h3>' + key + '</h3> <div class="horizontal">';

                    // Display the videos  
                    for(let vid of galleryTabsArray[key]) {
                        this.#Gallery_Video(vid.Type, vid.Data);
                    }
                    
                    this.m_Output += '</div>';
                    this.m_Output += '<div class="seal" onclick="this.parentElement.style.display=\'none\'; closeTab()">&#x2259</div>';
                    break;

                case "Images":
                    this.m_Output += '<h3>' + key + '</h3>';
                    this.#Gallery_ImageCarousel(this.m_ID, galleryTabsArray[key]);
                    break;

                case "Project":
                    break;

                default:
                    this.m_Output += '<!-- Invalid Content Tab selected -->';
                    break;
            }            
            
            // Content window end
            this.m_Output += '</div>';
        }
        
        // End of the gallery
        this.m_Output += '</div> </div>';
    }

    // Select which tabs to put in the gallery 

    // Render the Data to the HTML Dom element by the specified ID
    RenderOutput() {
        this.m_Output += '</div>';
        this.m_Output += '<hr class="bLineProj">';
        this.m_Output += '</div>';
        return this.m_Output;
    }

    // Private utility functions
    #Gallery_Document(type, data) {

        this.m_Output += ' <li> <div class="card" style="width: 18rem;"> <img src="' + data.Thumbnail + '" class="card-img-top" alt="..."> <div class="card-body"> <h5 class="card-title"> ' + data.Name + '</h5> <p class="card-text">' + data.Brief + '.</p> <!-- Button trigger modal --> <a href="#" type="button" class="card-btn" data-bs-toggle="modal" data-bs-target="#' + this.m_ID + data.DocID + '_staticBackdrop">View Document</a> <!-- Modal --> <div class="modal fade" id="' + this.m_ID + data.DocID + '_staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="' + this.m_ID + data.DocID + '_staticBackdropLabel" aria-hidden="false"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" id="' + this.m_ID + data.DocID + '_staticBackdropLabel">' + data.Name + '</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> </div> <div class="modal-body"> ';
        
        /* Documment
        // switch between document types
        */
         
        switch(type) {
            case "PDF":
                this.m_Output += '<object data="' + data.Link + '" type="application/pdf" class="lsepi_modal-content" id="pdfReader"> <p> It appears your Web browser is not configured to display PDF files or the link is broken. No worries, just <a href="' + data.Link + '">click here to Download the PDF file.</a> </p> </object> <a class="linkProj" href="' + data.Link + '">' + data.DownloadInstruction + '</a>';
            break;
            case "DOC":
                this.m_Output += '<iframe src="' + data.Link + '" class="EmbeddedDoc" frameborder="0" scrolling="no"></iframe>';
            break;
            case "XLSX":
                this.m_Output += '<iframe class="EmbeddedDoc" frameborder="0" scrolling="no" src="' + data.Link + '"></iframe> <p class="ProjNotice"><Strong>Note: </Strong>Macros are not supported on Excel Online (So no forms and buttons), You will need to downlad the file, open it offline and Enable Macros to use the buttons. <br> There\'s a download button on the document. <br> <img class="IconDocDownload" src="files/images/icons/icon_officeDownloadButtonS.png" alt="Document Download Button"> </p>';
                break;
            default:
                this.m_Output += '<!-- Invalid document type selected --> No Document to show';
                break;
            }
            
        this.m_Output += '</div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> </div> </div> </div> </div> </div> </div> </li>';
    }
    
    #Gallery_Video(type, data) {
        this.m_Output += '';
        
        /* Switch between video types */
        switch (type) {
            case "YouTubeVideo":
                this.m_Output += '<iframe class="ytVideo" src="' + data.Link + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';                
                break;
                
            default:
                this.m_Output += '<!-- Invalid video type selected --> No Video to show';
                break;
        }

        this.m_Output += '';
        
    }
    
    #Gallery_ImageCarousel(carouselID, dataArray) {
        /* images carousel */
        // this.m_Output += '<img class="imgCrsl d-block w-100" src="' + dataArray[0].Link + '" alt="' + dataArray[0].Name + '">';

        this.m_Output += '<div id="' + carouselID + '_carouselIndicators" class="carousel slide pointer-event" data-bs-ride="carousel">';
        
        // carousel-indicators

        this.m_Output += '<div class="carousel-indicators">';
        
        for(let [index, key] of Object.entries(dataArray))
        {
            if (index != 0)
            {
                this.m_Output += '<button type="button" data-bs-target="#' + carouselID + '_carouselIndicators" data-bs-slide-to="' + index + '" aria-label="Slide ' + index+1 + '"></button>';
            }
            else
            {
                this.m_Output += '<button type="button" data-bs-target="#' + carouselID + '_carouselIndicators" data-bs-slide-to="' + index + '" class="active" aria-current="true" aria-label="Slide ' + index+1 + '"></button>';
            }
        }

        this.m_Output += '</div>';
        
        // carousel-inner
        this.m_Output += '<div class="carousel-inner">';
        
        for(let [index, key] of Object.entries(dataArray))
        {
            if (index != 0)
            {
                this.m_Output += '<div class="carousel-item"> <img class="imgCrsl d-block w-100" src="' + key.Link + '" alt="' + key.Tag + '"> </div>';
            }
            else 
            {
                this.m_Output += '<div class="carousel-item active"> <img class="imgCrsl d-block w-100" src="' + key.Link + '" alt="' + key.Tag + '"> </div>';
            }
        }
        
        this.m_Output += '</div>';
        
        this.m_Output += '<button class="carousel-control-prev" type="button" data-bs-target="#' + carouselID + '_carouselIndicators" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true">&#x276E</span> <span class="visually-hidden">Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#' + carouselID + '_carouselIndicators" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true">&#x276F</span> <span class="visually-hidden">Next</span> </button>';
        
        this.m_Output += '</div>';
    }
    
}

