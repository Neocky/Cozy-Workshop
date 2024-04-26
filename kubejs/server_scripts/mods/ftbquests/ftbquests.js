
/**
 * @file Removes every recipe from the mod FTB Quests except the Quest Book
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    event.remove({ id: "ftbquests:loot_crate_opener" })
    event.remove({ id: "ftbquests:screen_1" })
    event.remove({ id: "ftbquests:screen_3" })
    event.remove({ id: "ftbquests:screen_5" })
    event.remove({ id: "ftbquests:screen_7" })
    event.remove({ id: "ftbquests:task_screen_configurator" })

})
