
// remove every machine from productive bees so it needs to be done with create


ServerEvents.recipes(event => {
    let productivebees_blocks = [
        "bottler",
        "centrifuge",
        "powered_centrifuge",
        "heated_centrifuge",
        "honey_generator",
        "catcher",
        "incubator",
    ]

    productivebees_blocks.forEach(block => {
        event.remove({output: "productivebees:" + block})
    })

    event.remove({ type: "productivebees:centrifuge" })
    event.remove({ type: "productivebees:bottler" })

    event.remove({ id: "productivebees:milk_bucket" })
})
