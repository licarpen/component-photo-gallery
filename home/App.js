import Component from '../Component.js';
import Header from './Header.js';
import FilterImages from './FilterImages.js';
import ImageList from './ImageList.js';
import AddImage from './AddImage.js';
import images from '../data/images.js';

// renders all components: header, filter, list of images, and image items
class App extends Component{

    onRender(dom){

        const header = new Header();
        const headerDOM = header.renderDOM(); 
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        const listDiv = dom.querySelector('.animal-cards');
        listDiv.appendChild(imageListDOM);

        const addImage = new AddImage({
            images: images,
            onSubmit: (formImage) => {
                images.push(formImage);
                imageList.update(images);
            }
        });
        const addImageDOM = addImage.renderDOM();
        const formDiv = dom.querySelector('.form');
        formDiv.appendChild(addImageDOM);
       
        const filterImages = new FilterImages({
            images: images,
            onFilter: (imageKeyword => {
                let filteredImages;
                if (!imageKeyword) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageKeyword;
                    });
                }
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            })

        });

        const filterImagesDOM = filterImages.renderDOM();
        const filterSection = dom.querySelector('#filter');
        filterSection.appendChild(filterImagesDOM);
    }

    renderHTML(){
        // generate skeleton for header, main, and footer
        return `
        <div>
        <main>
            <div id="filter">
            </div>
            <div class="form">
            </div>
            <div class="animal-cards">
            </div>
        </main>
        </div>
        `;
    }
}

export default App;