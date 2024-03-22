
# 🔥 Cozy Workshop
> A cozy minecraft modpack to play with your girlfriend.

This is an easy to grasp modpack with quests, farming and the mod Create to experience a seamless expansion and to expand the minecraft horizon.  
The modpack is pretty light with under 100 mods in total and only needs 4 GB of ram on my shitty laptop to run with 60 FPS.  
This modpack is suited for beginners and every mod in this pack is documented in-game and guided by quests.


## ⚙ Building
1. Have [Prism Launcher](https://prismlauncher.org/) & [packwiz](https://packwiz.infra.link/) installed
2. Clone repository
3. Export repository with `packwiz modrinth export`
4. Import `.mrpack`-File in Prism Launcher and use the same folder as the repository
5. Update the Prism Instance when adding new mods with these steps: 
    1. Add new mods with `packwiz modrinth add MOD`
    2. Do the same for the *mods_curseforge* folder with `packwiz curseforge add MOD`
    2. Export pack with `packwiz modrinth export` 
    3. Apply update in Prism Launcher with: Rightclick > Edit > Modrinth > Update from file


### Export for Curseforge
In the folder `mods_curseforge` exists a curseforge packwiz pack. Only the mods are present and every other folder needs to be copied.
To simplify this process just run `build_pack.py` to export the curseforge pack with packwiz.  
The packwiz.exe file needs to be present in the root folder!
This script will copy all necessary files and export the resulting modpack with packwiz for curseforge. 


### Export for Modrinth
Run this packwiz command:
```
.\packwiz.exe curseforge export -o MODPACK_NAME.zip
```
