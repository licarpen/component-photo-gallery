// IMPORT MODULES under test here:
import ImageItem from '../home/ImageItem.js';

const test = QUnit.test;

test('renders html for image item from images.js', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = `
    <li class="animal-container">
    <h2 title="${image.description}">${image.title}</h2>
    <h3>${image.keyword}</h3>
    <h3 class="horn">${image.horns} Horn</h3>
    <div class="animal-image-container"><img class="animal-image" src="${image.url}" alt="Uniwahl"></div>
    </li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const props = { image: image };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, html);
});
