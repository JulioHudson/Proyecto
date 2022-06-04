const checkout = document.querySelector(".checkout");

const payment = async () => {
    
    const productsToMap = cart.map(Element => {
        let newElement =
        {
            title: Element.name,
            description: Element.description,
            picture_url: Element.imgScr,
            category_id: Element.id,
            quantity: Element.instock,
            currency_id: "ARS",
            unit_price: Element.price
        }
        return newElement
    })
    let response = await fetch ("https://api.mercadopago.com/checkout/preferences", {

        method: "POST",
        headers: {
            Authorization: "Bearer TEST-3349520079917066-060417-c231a0784652a2548cf9ce9324e845a8-71810306"
        },
        body: JSON.stringify({
            items: productsToMap
        })
    })
    let data = await response.json()
    console.log(data)
    window.open(data.init_point, "_blank")
}