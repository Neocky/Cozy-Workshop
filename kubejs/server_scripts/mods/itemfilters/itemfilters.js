
/**
 * @file Removes every recipe from the mod Item Filters
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    event.remove({ mod: "itemfilters" })

})
