<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
        <li><a href="#simple-build-for-production">Simple build for production</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The purpose of this project is to create a API for Product Management using Azure Functions. The API was created using Restful and Serverless Architecture together with MongoDB.



### Built With

* [Node.js](https://nodejs.org/en/)
* [AzureFunctions](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash%2Ckeda)

## npm packages

* [mongodb](https://www.npmjs.com/package/mongodb)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

#### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- ##### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- ##### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.3.0

    $ npm --version
    7.24.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g



#### Azure Functions Core Tools
- #### Node installation on Windows

  Just go on [official Azure Functions Core Tools website](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash%2Ckeda) and download the installer.

####




### Installation

1. Create a bot with BotFather on Telegram and get the TOKEN
2. Clone the repo
   ```sh
   git clone https://github.com/christhian12rv/API-for-Product-Management
   ```
3. Install NPM packages
   ```sh
   npm install
   ```




### Running the project

    $ func host start



<!-- USAGE EXAMPLES -->
## Usage

Have fun playing with the API.



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>