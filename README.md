# Logo Generator

## Description

This project is a command-line application built in Node.js, which enables users to quickly generate a simple SVG logo. The main motivation behind this project was to provide a solution for freelance web developers who might not have the design resources or skills to create a logo for their projects. By automating the logo creation process, this tool saves time and money.

With this application, users can choose a color and a shape (circle, triangle, or square) for their logo, provide a text (up to three characters), and generate an SVG logo which can be used in their web projects.

While building this project, I improved my skills in Node.js, learned more about creating command-line applications, handling user inputs, and working with SVG graphics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Run `node index.js` to start the application.

## Usage

1. After starting the application with `node index.js`, you will be prompted to enter the details for your logo.
2. Choose a color and a shape for the logo.
3. Enter a text for the logo (up to three characters).
4. A new SVG file named `logo.svg` will be generated in the 'examples' folder.
5. You can use this SVG file in your web project.

## Credits

This application was built by [Samuel Munguia](https://github.com/samuel-6).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- User can choose a color and a shape for the logo.
- User can provide a text for the logo.
- SVG logo file is automatically generated.

## How to Contribute

Contributions are always welcome! Please feel free to submit a pull request.

## Tests

The application has a test suite that verifies the correct rendering of different shapes. To run the tests, navigate to the project root and run the following command:

```bash
npm test
```

This will run the test script defined in the package.json file and use Jest to run the tests in the shapes.test.js file.