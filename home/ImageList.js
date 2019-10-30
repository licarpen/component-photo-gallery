import Component from '../Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component{

    // returns HTML structure for generating the image list, which in this case is just an ul element
    renderHTML(){
        return `
        <ul id="animal-list"></ul>
        `;
    }

    onRender(dom){
        const images = this.props.images;

        images.forEach(image => {
            // get clarification on { images: image }
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;