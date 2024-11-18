# Ionic Projects Repository

This repository contains the `src` folders of my Ionic projects. To keep the repository size manageable, only the `src` directories are included for each project.

## How to Run the Code

To run any project from this repository, follow these steps:

1. **Create a New Ionic Project**  
   Use the Ionic CLI to create a new project:  
   ```bash
   ionic start project-name
   ```
2. **Replace the src Folder**  
   Replace the newly created `src` folder with the one from the desired project in this repository.  

3. **Additional Configurations (if applicable)**  
   For the following projects, update the tsconfig.json file with these lines to ensure proper functionality: **appFireBase** and **appPetCuidador**
   ```json
   {
    "useDefineForClassFields": false, // Find this existing line and add the next two
    "strictPropertyInitialization": false,
    "skipLibCheck": true
   }
   ```