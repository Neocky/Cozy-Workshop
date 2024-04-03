
// requires NetJS https://www.curseforge.com/minecraft/mc-mods/netjs-kubejs-addon
// requires Better Compatibility Checker https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker

/**
 * @file Client side modpack update checker.
 * @author KostromDan <https://github.com/KostromDan> Original Author
 * @author Neocky <https://github.com/Neocky> Modpack Author
 */


// invokes Better Compatibility Checker to read current version later
//const $BCC = Java.loadClass('dev.wuffs.bcc.CommonClass')


// const $ConfirmScreen = Java.loadClass('net.minecraft.client.gui.screens.ConfirmScreen')
let modpack_name = 'Cozy Workshop'
let url_id = 'wTjASWSG'


/**
* @description Checks if the Client is on the latest Modpack version and if not notfies them via chat
* @returns None
*/
function check_updates()
{
    //let current_version = $BCC.version
    let modpack_version = JsonIO.read('kubejs/update_notifier_modpack_version.json') ?? {}
    let current_version = modpack_version["version"]
    //let current_version = "1.0.0"
    let current = JsonIO.read('kubejs/update_notifier.json') ?? {}
    if (!("enabled" in current)) { current["enabled"] = true }
    if (!("hidden_versions" in current)) { current["hidden_versions"] = [] }
    if (!("is_notified_at_this_launch" in current)) { current["is_notified_at_this_launch"] = false }
    JsonIO.write('kubejs/update_notifier.json', current)
    if (current["is_notified_at_this_launch"]) { return }

    NetJS.getPasteBin(url_id, result => {
        if (!(result.success))
        {
            console.log(`${modpack_name}-logging: Exeption caught while checking modpack updates:\n${result.exception}`)
            return
        }

        let json_result = result.parseRawToJson()
        let latest_version = json_result['version']
        current = JsonIO.read('kubejs/update_notifier.json')
        // check if new version is available
        if (current_version >= latest_version)
        {
            console.log(`${modpack_name}-logging: No updates found. Modpack version is synchronized!`)
            return
        }

        console.log(`${modpack_name}-logging: An update for the modpack is available! ${latest_version} is out. Currently running ${current_version}`)

        if (current["enabled"] && !current["hidden_versions"].contains(latest_version))
        {
            // tell player that new version is available
            Client.player.playNotifySound("minecraft:entity.experience_orb.pickup", "master", 1, 1)
            Client.player.tell(Component.join([
                Component.green(`An update for `),
                Component.gold(`${modpack_name}`)
                    .click({
                        "action": "open_url",
                        "value": json_result["curseforge_link"]
                    })
                    .hover(Component.join([
                        Component.gold(`${modpack_name}`),
                        Component.yellow(` on CurseForge`)
                ])),
                Component.green(" is available!\n"),
                Component.white("You are playing on version "),
                Component.yellow(current_version),
                Component.white(", the latest version is "),
                Component.green(latest_version),
                Component.white('!\nUpdate using your launcher or via:\n'),
                Component.string("[CurseForge]").color(0xF16436)
                    .click({
                        "action": "open_url",
                        "value": `${json_result["link_curseforge"]}/files`
                    })
                    .hover(Component.join([
                        Component.yellow(`Open `),
                        Component.gold(`${modpack_name}`),
                        Component.yellow(` downloads page on `),
                        Component.string("CurseForge").color(0xF16436)
                ])),
                Component.white(" "),
                Component.string("[Modrinth]").color(0x1BD96A)
                    .click({
                        "action": "open_url",
                        "value": `${json_result["link_modrinth"]}/`
                    })
                    .hover(Component.join([
                        Component.yellow(`Open `),
                        Component.gold(`${modpack_name}`),
                        Component.yellow(` downloads page on `),
                        Component.string("Modrinth").color(0x1BD96A)
                ])),
                Component.white(" "),
                Component.darkGray("[GitHub]")
                    .click({
                        "action": "open_url",
                        "value": `${json_result["link_github"]}/`
                    })
                    .hover(Component.join([
                        Component.yellow(`Open `),
                        Component.gold(`${modpack_name}`),
                        Component.yellow(` release page on `),
                        Component.darkGray("GitHub")
                ])),
                Component.gray('\nYou can also '),
                Component.red("[hide]")
                    .click({
                        "action": "run_command",
                        "value": `/update_notifier hide ${latest_version}`
                    })
                    .hover(Component.join([
                        Component.red(`Hide only this update!\n`),
                        Component.yellow(`You will no longer be notified for version `),
                        Component.green(`${latest_version}`),
                        Component.yellow(`,\nbut you will be notified again when the next version is available.`)
                    ])),
                Component.gray(" this update message temporarily."),
            ]))
        }
        current["is_notified_at_this_launch"] = true
        JsonIO.write('kubejs/update_notifier.json', current)
    })
}


function switcher(boolean)
{
    let current = JsonIO.read('kubejs/update_notifier.json')
    if (current == null)
    {
      return
    }
    current["enabled"] = boolean
    JsonIO.write('kubejs/update_notifier.json', current)
}


NetworkEvents.dataReceived('update_notifier_check', event => {
    check_updates()
})


NetworkEvents.dataReceived('update_notifier_hide', event => {
    let current = JsonIO.read('kubejs/update_notifier.json')
    if (current == null)
    {
        return
    }

    let version = event.data["version"]
    if (!current["hidden_versions"].contains(version))
    {
        current["hidden_versions"].push(version)
        Client.player.tell(Component.join([
            Component.white(`\nVersion `),
            Component.green(version),
            Component.white(" will be skipped and you won't get notified for this version. You will be notified again, when the next version is available."),
            Component.white("\nYou can revert the skip here: "),
            Component.red("[reset]\n")
                .click({
                    "action": "run_command",
                    "value": `/update_notifier reset`
                })
                .hover(Component.join([
                    Component.yellow(`Click to show update reminders for all version again!`),
            ])),
        ]))
    }
    else
    {
        Client.player.tell(Component.join([
            Component.white(`\nVersion`),
            Component.green(version),
            Component.white("is already hidden!\n"),
        ]))
    }
    JsonIO.write('kubejs/update_notifier.json', current)
})


NetworkEvents.dataReceived('update_notifier_enable', event => {
    switcher(true)
    Client.player.tell(Component.join([
        Component.white(`\nUpdate notifier is `),
        Component.green('enabled'),
        Component.white("!\n"),
    ]))
})


NetworkEvents.dataReceived('update_notifier_clean_hide_list', event => {
    let current = JsonIO.read('kubejs/update_notifier.json')
    if (current == null)
    {
        return
    }

    current["hidden_versions"] = []
    JsonIO.write('kubejs/update_notifier.json', current)

    Client.player.tell(Component.join([
        Component.white(`\nHidden versions list `),
        Component.green('cleaned'),
        Component.white(" successfully!\n"),
    ]))
})
