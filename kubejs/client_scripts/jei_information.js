
// Add Information in JEI to Items and Blocks

JEIEvents.information(e => {
    e.addItem(
        "minecraft:wheat_seeds", [
            Text.translate("mp.item.minecraft.wheat_seeds.info1").string
    ])

    e.addItem(
        "farmersdelight:skillet", [
            Text.translatable("mp.item.farmersdelight.skillet.info1").string,
            Text.translatable("mp.item.farmersdelight.skillet.info2").string
    ])

    e.addItem(
        "fishofthieves:fish_bone", [
            Text.translate("mp.item.fishofthieves.fish_bone.info1").string
    ])


    e.addItem(
        "kubejs:chocolate_ore", [
            Text.translate("mp.block.kubejs.chocolate_ore.info1").string
    ])

    e.addItem(
        "kubejs:deepslate_chocolate_ore", [
            Text.translate("mp.block.kubejs.deepslate_chocolate_ore.info1").string
    ])


})
