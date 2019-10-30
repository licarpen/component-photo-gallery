import Component from '../Component.js';

class ImageItem extends Component{

    renderHTML(){
        const image = this.props.image;
        
        return `
    <li class="animal-container">
    <h2 title="${image.description}">${image.title}</h2>
    <h3>${image.keyword}</h3>
    <h3 class="horn">${image.horns} Horn</h3>
    <div class="animal-image-container"><img class="animal-image" src="${image.url}" alt="Uniwahl"></div>
    </li>
    `;
    }
}

export default ImageItem;