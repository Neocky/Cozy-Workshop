
/**
 * @file Adds loot & recipes to Chocolate Ore
 * @author Neocky <https://github.com/Neocky>
 */

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("kubejs:chocolate_ore")
        .dropExperience(2)
            .when((c) => {
                c.not((n) => {
                    n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")
        )})})
        .removeLoot(Ingredient.all)
        .addLoot("create:bar_of_chocolate")
            .withChance(50)
            .not((n) => {
                n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")
        )})
        .addLoot("kubejs:chococlate_ore")
            .when((c) =>
            c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
        )
        .addWeightedLoot(
            [1, 4],
            [
                Item.of("monecraft:coal").withChance(35),
                Item.of("minecraft:raw_iron").withChance(35),
                Item.of("minecraft:raw_copper").withChance(25),
                Item.of("create:raw_zinc").withChance(20),
                Item.of("minecraft:raw_gold").withChance(10),
                Item.of("minecraft:redstone").withChance(10),
                Item.of("minecraft:lapis_lazuli").withChance(5),
                Item.of("minecraft:emerald").withChance(3),
                Item.of("minecraft:diamond").withChance(1)
            ]
        ).not((n) => {
            n.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch")
        )});


    event
        .addBlockLootModifier("kubejs:deepslate_chocolate_ore")
        .dropExperience(2)
        .removeLoot("kubejs:deepslate_chocolate_ore")
        .addLoot("create:bar_of_chocolate").withChance(50)
        .addWeightedLoot(
            [1, 4],
            [
                Item.of("monecraft:coal").withChance(35),
                Item.of("minecraft:raw_iron").withChance(35),
                Item.of("minecraft:raw_copper").withChance(25),
                Item.of("create:raw_zinc").withChance(20),
                Item.of("minecraft:raw_gold").withChance(10),
                Item.of("minecraft:redstone").withChance(10),
                Item.of("minecraft:lapis_lazuli").withChance(5),
                Item.of("minecraft:emerald").withChance(3),
                Item.of("minecraft:diamond").withChance(1)
            ]
        );
});




ServerEvents.recipes(event => {
    event.smelting('create:bar_of_chocolate', 'kubejs:chocolate_ore')
    event.smelting('create:bar_of_chocolate', 'kubejs:deepslate_chocolate_ore')

    event.blasting('create:bar_of_chocolate', 'kubejs:chocolate_ore')
    event.blasting('create:bar_of_chocolate', 'kubejs:deepslate_chocolate_ore')

})

