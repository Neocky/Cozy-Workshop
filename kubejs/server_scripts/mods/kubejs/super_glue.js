
/**
 * @file Adds recipes for Super Glue in Create
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    // Super Glue can be created via slime balls and vice versa
    event.recipes.create.mixing(Fluid.of("kubejs:glue_fluid").withAmount(100), [Ingredient.of("minecraft:slime_ball")]).heated()

    event.recipes.create.compacting('minecraft:slime_ball', Fluid.of("kubejs:glue_fluid").withAmount(100))

    // creates Create:Super Glue via Super Glue and an Iron Plate
    event.recipes.create.filling('create:super_glue', [Fluid.of('kubejs:glue_fluid', 500), '#forge:plates/iron'])

})
