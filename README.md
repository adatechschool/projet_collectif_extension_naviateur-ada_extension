# projet_collectif_extension_naviateur-ada_extension
projet_collectif_extension_naviateur-ada_extension created by GitHub Classroom

# MASTER TO MAIN 

git branch -a
git branch -m master main

-> passer sur Github et mettre la branche main en default 

git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main
git branch -D master
git add .
git commit -m "message"
git push 

#CREATE A BRANCH 
git branch <branch>
touch "file.txt"
git add .
git commit -m "message"
git push origin <branch> 

Une branche par fonctionnalité. 

#CRÉER LE MANIFESTE 

Le fichier manifest.json regroupe toutes les caractéristiques de l'extension + 
tous les fichiers HTML, CSS et JS, ou même jpg pour les icons, qui vont intervenir durant son développement : background.js, popup.html par exemple 

        {
        "name": "",
        "description": "",
        "version": "1.0",
        "manifest_version": 2/3
        }
        
