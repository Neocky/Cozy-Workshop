
// Hide Items in JEI

JEIEvents.hideItems(event => {
    event.hide([
        "productivebees:bottler",
        "productivebees:centrifuge",
        "productivebees:powered_centrifuge",
        "productivebees:heated_centrifuge",
        "productivebees:honey_generator",
        "productivebees:milk_bottle",
        "productivebees:invisible_redstone_block",

        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_1',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:task_screen_configurator'
    ])

    // remove every item from mod Item Filters
    event.hide('@itemfilters')
})
