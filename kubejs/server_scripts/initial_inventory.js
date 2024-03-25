
// give initial inventory to players

PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.given_initial_Inventory) {
        event.player.persistentData.given_initial_Inventory = true
        event.player.give(Item.of("minecraft:tropical_fish", {display:{Name:'{"translate":"mp.item.tropical_fish_huh.display", "italic":false, "color":"#F37021"}', Lore:['[{"translate":"mp.item.tropical_fish_huh.lore","italic":false, "color":"gray"}]']}}))
        // "text":"Huh?",
    }
})
