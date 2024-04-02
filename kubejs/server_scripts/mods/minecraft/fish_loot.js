
// adds Fish Bones to Minecraft fishes as loot
// loot chance is same like fishofthieves fishes

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:cod")
        .randomChanceWithLooting(0.025, 0.01) // 2.5%
        .addLoot("fishofthieves:fish_bone");


    event
        .addEntityLootModifier("minecraft:salmon")
        .randomChanceWithLooting(0.025, 0.01) // 2.5%
        .addLoot("fishofthieves:fish_bone");


    event
        .addEntityLootModifier("minecraft:tropical_fish")
        .randomChanceWithLooting(0.025, 0.01) // 2.5%
        .addLoot("fishofthieves:fish_bone");


    event
        .addEntityLootModifier("minecraft:pufferfish")
        .randomChanceWithLooting(0.025, 0.01) // 2.5%
        .addLoot("fishofthieves:fish_bone");
});
