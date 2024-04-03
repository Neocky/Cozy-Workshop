
/**
 * @file Server side Modpack Update Checker: Creation of Config file
 * @author KostromDan <https://github.com/KostromDan> Original Author
 * @author Neocky <https://github.com/Neocky> Modpack Author
 */


StartupEvents.init(event => {
    let current = JsonIO.read('kubejs/update_notifier.json') ?? {}

    current["is_notified_at_this_launch"] = false

    JsonIO.write('kubejs/update_notifier.json', current)
})
