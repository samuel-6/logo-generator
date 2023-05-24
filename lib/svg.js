const fs = require('fs');
const path = require('path');

const generateSvg = (shape, textColor, text) => {

    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

}

const writeSvgToFile = (content) => {

    const filePath = path.join(__dirname, '..', 'examples', 'logo.svg');
    fs.writeFile(filePath, content, (err) => {

        if (err) throw err;
        console.log('Generated logo.svg');

    });

}

module.exports = {generateSvg, writeSvgToFile};