import Component from '../Component.js';

class AddImage extends Component{

    renderHTML(){
        return `
        <form id="add-image-form">
        <h2>Add Your Own Creature</h2>
        <label for="title">Image Title: </label>
        <input name="title" type="text" required>
        <label for="keyword">Keyword: </label>
        <input name="keyword" type="text" required>
        <label for="url">Image url: </label>
        <input name="url" type="text" required>
        <label for="horns">Number of Horns: </label>
        <input name="horns" type="number" required>
        <label for="description">Description: </label>
        <input name="description"required>
        <button id="submit">Generate Your Image</button>
        </form>`;
    }

    onRender(form){
        const { onSubmit } = this.props;
    
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);

            const image = {
                title: formData.get('title'),
                keyword: formData.get('keyword'),
                url: formData.get('url'),
                horns: formData.get('horns'),
                description: formData.get('description')
            };
            onSubmit(image);
        });
    }
}
export default AddImage;