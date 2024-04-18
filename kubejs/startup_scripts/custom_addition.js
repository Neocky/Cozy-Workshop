
/**
 * @file Adds custom blocks, items, etc.
 * @author Neocky <https://github.com/Neocky>
 */


StartupEvents.registry('block', event => {
    // Adds a new chocolate Ore which will drop every ore randomly
    event.create('kubejs:chocolate_ore') // Create a new block
        .soundType('stone') // Set a material (affects the sounds and some properties)
        .hardness(3.0)
        .resistance(3.0)
        .requiresTool(true) // Requires a tool or it won't drop (see tags below)
        .tagBlock('forge:ores')
        .tagBlock('forge:ores_in_ground/stone')
        .tagBlock('balm:ores')
        .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
        .tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron


    event.create('kubejs:deepslate_chocolate_ore') // Create a new block
        .soundType('stone')
        .hardness(4.5)
        .resistance(3.0)
        .requiresTool(true)
        .tagBlock('forge:ores')
        .tagBlock('forge:ores_in_ground/stone')
        .tagBlock('balm:ores')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

})


StartupEvents.registry('item', event => {
    // Adds Chocolate Fishes
    // Assets and idea from:
    // https://modrinth.com/mod/le-fishe-au-chocolat
    let raw_chocolate_fishes = [
        'kubejs:chocolate_raw_cod',
        'kubejs:chocolate_raw_salmon'
    ]

    let cooked_chocolate_fishes = [
        'kubejs:chocolate_cod',
        'kubejs:chocolate_salmon',
        'kubejs:chocolate_tropical_fish'
    ]

    raw_chocolate_fishes.forEach(item => {
        event.create(item)
            .tag('kubejs:chocolate_fishes')
            .tag('minecraft:fishes')
            .tag('forge:raw_fishes')
            .food(f => f.hunger(8).saturation(0.35))
    })

    cooked_chocolate_fishes.forEach(item => {
        event.create(item)
            .tag('kubejs:chocolate_fishes')
            .tag('minecraft:fishes')
            .tag('forge:cooked_fishes')
            .food(f => f.hunger(10).saturation(0.55))
    })

})


StartupEvents.registry('fluid', event => {
    event.create('kubejs:glue_fluid')
        .thickTexture(0x00FF21)
        .bucketColor(0x00FF21)
        .displayName('Super Glue')
})
