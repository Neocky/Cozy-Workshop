
# builds the modpack for curseforge and modrinth

import os
import shutil


# build curseforge version
def build_modpack_curseforge(curseforge_folder: str) -> None:
    """
    Builds the modpack for Curseforge
    
    :returns: None
    """
    if os.path.exists(f"{curseforge_folder}/config/"):
            shutil.rmtree(f"{curseforge_folder}/config/")

    if os.path.exists(f"{curseforge_folder}/kubejs/"):
            shutil.rmtree(f"{curseforge_folder}/kubejs/")

    # copy needed files to curseforge folder
    try:
        shutil.copy("packwiz.exe", f"{curseforge_folder}/")
        shutil.copytree("config/", f"{curseforge_folder}/config/")
        #shutil.copytree("defaultconfigs/", "mods_curseforge")
        #shutil.copytree("fancymenud_data/", "mods_curseforge")
        shutil.copytree("kubejs/", f"{curseforge_folder}/kubejs/")
    except Exception as e:
        print("Files couldn't be copied correctly!")
        print(e)
        exit()

    os.chdir(curseforge_folder)
    # create export for curseforge
    try:
        os.system("packwiz.exe curseforge export --output Cozy-Workshop[curseforge].zip")
        shutil.copy("Cozy-Workshop[curseforge].zip", "../")
    except Exception as e:
        print("Curseforge pack couldn't be exported!")
        print(e)
        exit()

    os.chdir("..")

    # remove left over files
    try:
        shutil.rmtree(f"{curseforge_folder}/config/")
        shutil.rmtree(f"{curseforge_folder}/kubejs/")
        os.remove(f"{curseforge_folder}/packwiz.exe")
        os.remove(f"{curseforge_folder}/Cozy-Workshop[curseforge].zip")
    except Exception as e:
        print(e)
        exit()



if __name__ == "__main__":
    build_modpack_curseforge("mods_curseforge")
