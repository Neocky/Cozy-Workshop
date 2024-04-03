
// requires NetJS https://www.curseforge.com/minecraft/mc-mods/netjs-kubejs-addon
// requires Better Compatibility Checker https://www.curseforge.com/minecraft/mc-mods/better-compatibility-checker

/**
 * @file Server side Modpack Update Checker
 * @author KostromDan <https://github.com/KostromDan> Original Author
 * @author Neocky <https://github.com/Neocky> Modpack Author
 */


// invokes Better Compatibility Checker to read current version later
//const $BCC = Java.loadClass('dev.wuffs.bcc.Config')

let TIME_DELAY = 20 * 60 // 60 seconds

// modpack name and github gist ID
let modpack_name = 'Cozy Workshop'
let url_id = 'wTjASWSG'


function check_updates()
{
    let server = Utils.server
    let players = server.players
    players.forEach(player => {
        check_updates_for(player)
    })
}


function check_updates_for(player)
{ 
    player.sendData('update_notifier_check', {})
}


PlayerEvents.loggedIn(event => {
    let player = event.player
    Utils.server.scheduleInTicks(120, e => { check_updates_for(player) })
})


ServerEvents.loaded(event => {
    Utils.server.scheduleInTicks(TIME_DELAY * 10, e => {
        check_updates()
        e.reschedule()
    })

    if (!Utils.server.isDedicated()) { return }
    //let current_version = $BCC.ForgeConfigSpec.ConfigValue.modpackVersion
    //let current_version = "1.0.0"
    let modpack_version = JsonIO.read('kubejs/update_notifier_modpack_version.json') ?? {}
    let current_version = modpack_version["version"]
    Utils.server.scheduleInTicks(120, e => {
        NetJS.getPasteBin(url_id, result => {
            if (result.success)
            {
                let json_result = result.parseRawToJson()
                let latest_version = json_result['version']
                if (current_version < latest_version)
                {
                    console.log(`${modpack_name}-logging: An update for the modpack is available! ${latest_version} is out. Currently running ${current_version}`)
                    return
                }

                console.log(`${modpack_name}-logging: No updates found. Modpack version is synchronized!`)

            }
            else
            {
                console.log(result.exception)
            }
        })
    })
})


ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("update_notifier").then(Commands.literal("skip").then(Commands.argument("version", Arguments.  STRING.create(event)).executes(ctx => {
            let player = ctx.source.player
            player.sendData('update_notifier_skip', { version: Arguments.STRING.getResult(ctx, "version") })
            return 1
        }))).then(Commands.literal("enable").executes(ctx => {
            let player = ctx.source.player
            player.sendData('update_notifier_enable', {})
            return 1
        })).then(Commands.literal("reset").executes(ctx => {
            let player = ctx.source.player
            player.sendData('update_notifier_clean_skip_list', {})
            return 1
        }))
    )
})
