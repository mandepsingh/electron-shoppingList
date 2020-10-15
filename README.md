# electron-shoppingList
steps to follow:
  
   1. Fork my repo.
   2. Make a folder "electron/project/main.js"
   3. Open git bash, cd into "electron/project" and type "npm init"
         write,
             discription: "anything you want"
             entry point: main.js
             author:  "anythig"
             licence: MIT
             PRESS "ENTER"
         this will create package.json 
             open package.json and change the code with github package.json
                                  
   4. Command "npm install --save electron" on gitbash.
         this will create package-lock.json and add dependency on package.json.
   5. Make a file "electron/project/main.js" and copy "main.js" from github main.js file.
   6. Make a file "electron/project/mainWindow.html" and copy github mainWindow.html file. 
   7. Command "npm start" on gitbash, starts the app and ctrl+c to quit.
   8. Make a file "electron/project/addWindow.html" and copy github addWindow.html file. 
   9. Make a folder "electron/project/assets/icons/
                                            1. win/icon.ico
                                            2. mac/icon.icns
                                            3. png/icon.png
                                       given in github, download any paste in mentioned file .    
    
    10. Pulblishing the app,
                     gitbash cmnd "electron install --save-dev electron-packager"
    
    11. Command "nmp run package-win" on gitbash
    this creates a folder release-builds/"your app name"/
    and the file with entension .exe is the main app.
              just open it
        
                  and
    
     have fun with that and don't hesitate to change any code.
         if helpNeeded:hapysingh1313@gmail.com
         
         
