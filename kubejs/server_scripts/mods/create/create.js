
/**
 * @file Adds/removes recipes for the Create mod
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    // Super Glue needs to be created through the fluid
    event.remove({ id: 'create:crafting/kinetics/super_glue' })
})
