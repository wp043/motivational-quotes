# Motivational Quotes VSCode Extension

## Overview
The Motivational Quotes extension displays a random motivational quote in the status bar of Visual Studio Code. Users can also shuffle the quote to get a new one at any time. Additionally, users can add their own custom quotes through the settings.

## Features
- Display a random motivational quote in the status bar.
- Shuffle to a new quote on demand.
- Add custom motivational quotes via settings.

## Development
#### Prerequisite
* Node.js
* VSCode
* Yeoman and VSCode Extension Generator:
    ```sh
    npm install -g yo generator-code
    ```
#### Setup
* Generate a new VSCode extension:
    ``` sh
    yo code
    ```
* Follow the prompts and choose New Extension (TypeScript).
* Replace the generated code with the code from this repository.
#### Compile and Run
* Compile the TypeScript code:
    ```sh
    npm run compile
    ```
* Open VSCode and press `F5` to start debugging and open a new window with the extension loaded.

## Installation
1. Install from VSCode Marketplace:

- Search for "Motivational Quotes" in the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS) and click Install.

2. Install from Source:

- Clone this repository:
    ```sh
    git clone https://github.com/wp043/motivational-quotes
    ```
- Navigate to the project directory and install the dependencies:
    ```sh
    cd motivational-quotes
    npm install
    ```
- Open the project in VSCode:
    ```sh
    code .
    ```
- Compile the extension:
    ```sh
    npm run compile
    ```
- Press `F5` to start debugging and open a new VSCode window with the extension loaded.

## Usage
- Display a Motivational Quote
    * When you open VSCode, a random motivational quote will be displayed in the status bar.

- Shuffle the Quote
    * To shuffle and display a new quote:
    * Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    * Type Shuffle Motivational Quote and select the command.

- Add Custom Quotes
    * You can add your own quotes to the list of motivational quotes:
    * Open your settings (`Ctrl+`, or `Cmd+`).
    * Search for `motivationalQuotes.userQuotes` and edit the settings JSON file directly by clicking on the {} icon at the top right.
    * Add your custom quotes as an array of strings:
        ```json
        {
            "motivationalQuotes.userQuotes": [
                "Your new quote here!",
                "Another custom quote!",
            ]
        }
        ```
## License
This project is licensed under the MIT License.