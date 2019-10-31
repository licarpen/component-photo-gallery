import Component from '../Component.js';

class ImageItem extends Component{

    renderHTML(){
        const { url, title, description, keyword, horns } = this.props.image;
        
        return `
    <li class="animal-container">
    <h2 title="${description}">${title}</h2>
    <h3>${keyword}</h3>
    <h3 class="horn">${horns} Horn</h3>
    <div class="animal-image-container"><img class="animal-image" src="${url}" alt="Uniwahl"></div>
    </li>
    `;
    }
}

export default ImageItem;