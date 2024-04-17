//requires: minecraft
//requires: create


/**
 * @file Adds recipes for Chocolate Fishes in Create
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    event.recipes.create.filling('kubejs:chocolate_raw_cod', [Fluid.of('create:chocolate', 250), 'minecraft:cod'])

    event.recipes.create.filling('kubejs:chocolate_raw_salmon', [Fluid.of('create:chocolate', 250), 'minecraft:salmon'])

    event.recipes.create.filling('kubejs:chocolate_cod', [Fluid.of('create:chocolate', 250), 'minecraft:cooked_cod'])

    event.recipes.create.filling('kubejs:chocolate_salmon', [Fluid.of('create:chocolate', 250), 'minecraft:cooked_salmon'])

    event.recipes.create.filling('kubejs:chocolate_tropical_fish', [Fluid.of('create:chocolate', 250), 'minecraft:tropical_fish'])

    event.recipes.create.filling('kubejs:chocolate_cod', [Fluid.of('create:chocolate', 250), '#fishofthieves:cooked_thieves_fish'])

    event.recipes.create.filling('kubejs:chocolate_raw_cod', [Fluid.of('create:chocolate', 250), '#fishofthieves:thieves_fish'])
})
