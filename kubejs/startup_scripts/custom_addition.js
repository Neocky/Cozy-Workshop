
/**
 * @file Adds custom blocks etc.
 * @author Neocky <https://github.com/Neocky>
 */


StartupEvents.registry('block', event => {
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
