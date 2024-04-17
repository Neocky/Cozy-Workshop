
// change bone meal recipe to only get 1 bone meal


ServerEvents.recipes(event => {
    event.remove({ id: "fishofthieves:bonemeals_from_fish_bone" })


    event.shapeless(
        Item.of("minecraft:bone_meal", 1),
        [
            "fishofthieves:fish_bone"
        ]
    )

})
