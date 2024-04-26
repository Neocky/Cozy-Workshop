
/**
 * @file Change Fish of Thieves recipes
 * @author Neocky <https://github.com/Neocky>
 */


ServerEvents.recipes(event => {
    // change bone meal recipe to only get 1 bone meal
    event.remove({ id: "fishofthieves:bonemeals_from_fish_bone" })

    event.shapeless(
        Item.of("minecraft:bone_meal", 1),
        [
            "fishofthieves:fish_bone"
        ]
    )

})
