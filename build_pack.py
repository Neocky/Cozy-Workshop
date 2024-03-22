
# builds the modpack for curseforge and modrinth

import os
import shutil


# build curseforge version
def build_modpack_curseforge(packname: str, curseforge_folder: str) -> None:
    """
    Builds the modpack for Curseforge

    :packname: Modpack name without file suffix
    :curseforge_folder: Path to Modpack instance of curseforge mods

    :returns: None
    """
    if os.path.exists(f"{curseforge_folder}/config/"):
            shutil.rmtree(f"{curseforge_folder}/config/")

    if os.path.exists(f"{curseforge_folder}/kubejs/"):
            shutil.rmtree(f"{curseforge_folder}/kubejs/")

    # copy needed files to curseforge folder
    shutil.copy("packwiz.exe", f"{curseforge_folder}/")
    shutil.copytree("config/", f"{curseforge_folder}/config/")
    #shutil.copytree("defaultconfigs/", f"{curseforge_folder}/defaultconfigs/")
    #shutil.copytree("fancymenu_data/", f"{curseforge_folder}/fancymenu_data/")
    shutil.copytree("kubejs/", f"{curseforge_folder}/kubejs/")

    os.chdir(curseforge_folder)

    # create export for curseforge
    try:
        os.system(f"packwiz.exe curseforge export --output {packname}.zip")
        shutil.copy(f"{packname}.zip", "../")
    except Exception as e:
        print("Curseforge pack couldn't be exported!")
        print(e)
        exit()

    os.chdir("..")

    # remove left over files
    try:
        shutil.rmtree(f"{curseforge_folder}/config/")
        shutil.rmtree(f"{curseforge_folder}/kubejs/")
        #os.remove(f"{curseforge_folder}/packwiz.exe")
        os.remove(f"{curseforge_folder}/{packname}.zip")
    except Exception as e:
        print(e)
        exit()

    return


if __name__ == "__main__":
    build_modpack_curseforge("Cozy-Workshop[curseforge]", "mods_curseforge")
