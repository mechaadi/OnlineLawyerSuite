# OnlineLawyerSuite

### Frontend
  This directory contains the React APP. The frontend has a simple file structure.
  - **build**: this is the folder where all built (ready to deploy files) are stored.
  - **public**: this is the react's public folder which stores the manifest files, favicons, index.html and other important files
  - **src**: this folder contains the actual source code, now this folder has furthur sub-directories
    - **Api**: All the api call functions are stored in this directory
    - **Asets**: All multimedia files are stored here
    - **Components**: This project is using a modular approach, so all the components(which can be used in any page like buttons, input fields etc) are stored in here.
    - **Pages**: All the main views are stored in this directory.

### Backend
This directory contains the Flask APP (the rest API)

### prod
This directory contains the firebase config and hosting files (the frontend is hosted on firebase)
- **public/index.html**: this is the file where we inject the js chunks (built from the webpack), which in turn renders all the markup of the website.
- **static**: this is the directory which contains all the build files (js chunks, css chunks and media files [if any])
    - **js**: containing all js chunks
    - **css**: containing all css chunks
    - **media**: containing all media chunks

### NEXT
This directory contains the 1st version of this app (SSR BASED).
