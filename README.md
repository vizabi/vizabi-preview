# Setting up preview page

Clone this repo and [vizabi/vizabi](https://github.com/vizabi/vizabi), so that they end up in the adjacent folders.
Go to the `vizabi` folder. Run npm install
Go to the `vizabi-preview` folder. Run npm install, npm link ../vizabi, npm start
Open the file `packages.json` in `vizabi-preview` and make sure it only includes `vizabi` and any installed tools.
Open browser on http://localhost:8080/

## Building Vizabi with tools and preview page

Each Vizabi Tool has its own repo. To build a tool:
 - clone the tool repo into a folder next to `vizabi` and `vizabi-preview`
 - run `npm install` in the tool folder.
 - go to `vizabi-preview` folder
 - run `npm link ../vizabi-tool-name`
 - open the file `packages.json` and make sure it only includes `vizabi` and any linked tools
 - run `npm start`
