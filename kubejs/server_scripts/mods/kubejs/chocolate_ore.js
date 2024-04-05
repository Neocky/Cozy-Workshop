
/**
 * @file Adds loot & recipes to Chocolate Ore
 * @author Neocky <https://github.com/Neocky>
 */

LootJS.modifiers((event) => {

    event.enableLogging();

    event
        .addBlockLootModifier("kubejs:chocolate_ore")
        .removeLoot(Ingredient.all)
        .pool( p => {
            p.matchMainHand(ItemFilter.PICKAXE)
            p.not( n => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
            p.dropExperience(2)
            p.addWeightedLoot([1,4],
            [ 
                Item.of("minecraft:coal").withChance(35),
                Item.of("minecraft:raw_iron").withChance(35),
                Item.of("minecraft:raw_copper").withChance(20),
                Item.of("create:raw_zinc").withChance(10),
                Item.of("minecraft:raw_gold").withChance(10),
                Item.of("minecraft:redstone").withChance(5),
                Item.of("minecraft:lapis_lazuli").withChance(5),
                Item.of("minecraft:emerald").withChance(3),
                Item.of("minecraft:diamond").withChance(1)
            ])
            p.randomChance(0.33)
            p.addLoot("create:bar_of_chocolate")
            p.applyOreBonus("minecraft:fortune")
        })
        .pool( p => {
            p.matchMainHand(ItemFilter.PICKAXE)
            p.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
            p.addLoot("kubejs:chocolate_ore");
        });


    event
        .addBlockLootModifier("kubejs:deepslate_chocolate_ore")
        .removeLoot(Ingredient.all)
        .pool( p => {
            p.matchMainHand(ItemFilter.PICKAXE)
            p.not( n => n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")))
            p.dropExperience(2)
            p.addWeightedLoot([1,4],
            [ 
                Item.of("minecraft:coal").withChance(35),
                Item.of("minecraft:raw_iron").withChance(35),
                Item.of("minecraft:raw_copper").withChance(20),
                Item.of("create:raw_zinc").withChance(10),
                Item.of("minecraft:raw_gold").withChance(10),
                Item.of("minecraft:redstone").withChance(5),
                Item.of("minecraft:lapis_lazuli").withChance(5),
                Item.of("minecraft:emerald").withChance(3),
                Item.of("minecraft:diamond").withChance(1)
            ])
            p.randomChance(0.33)
            p.addLoot("create:bar_of_chocolate")
            p.applyOreBonus("minecraft:fortune")
        })
        .pool( p => {
            p.matchMainHand(ItemFilter.PICKAXE)
            p.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
            p.addLoot("kubejs:deepslate_chocolate_ore");
        });

})




ServerEvents.recipes(event => {
    event.smelting("create:bar_of_chocolate", "kubejs:chocolate_ore")
    event.smelting("create:bar_of_chocolate", "kubejs:deepslate_chocolate_ore")

    event.blasting("create:bar_of_chocolate", "kubejs:deepslate_chocolate_ore")
    event.blasting("create:bar_of_chocolate", "kubejs:chocolate_ore")


    event.recipes.create.crushing([
        Item.of("create:bar_of_chocolate"),
        Item.of("minecraft:coal").withChance(0.35),
        Item.of("2x create:crushed_raw_iron").withChance(0.35),
        Item.of("2x create:crushed_raw_copper").withChance(0.20),
        Item.of("2x create:crushed_raw_zinc").withChance(0.10),
        Item.of("2x create:crushed_raw_gold").withChance(0.10),
        Item.of("2x minecraft:redstone").withChance(0.05),
        Item.of("2x minecraft:lapis_lazuli").withChance(0.05),
        Item.of("minecraft:emerald").withChance(0.03),
        Item.of("minecraft:diamond").withChance(0.01)
        ], "kubejs:deepslate_chocolate_ore")


    event.recipes.create.crushing([
        Item.of("create:bar_of_chocolate"),
        Item.of("minecraft:coal").withChance(0.35),
        Item.of("2x create:crushed_raw_iron").withChance(0.35),
        Item.of("2x create:crushed_raw_copper").withChance(0.20),
        Item.of("2x create:crushed_raw_zinc").withChance(0.10),
        Item.of("2x create:crushed_raw_gold").withChance(0.10),
        Item.of("2x minecraft:redstone").withChance(0.05),
        Item.of("2x minecraft:lapis_lazuli").withChance(0.05),
        Item.of("minecraft:emerald").withChance(0.03),
        Item.of("minecraft:diamond").withChance(0.01)
        ], "kubejs:chocolate_ore")


})

