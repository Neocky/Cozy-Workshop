
// remove every machine from productive bees so it needs to be done with create

let productivebees_blocks = [
    "bottler",
    "centrifuge",
    "powered_centrifuge",
    "heated_centrifuge",
    "honey_generator",
    "catcher",
    "incubator",
]

ServerEvents.recipes(event => {
    productivebees_blocks.forEach(block => {
        event.remove({output: "productivebees:" + block})
    }) 
})
