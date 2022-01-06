function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    return (precio * porcentajePrecioConDescuento) / 100;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const userCoupon = coupons.find(function (coupon) {
        console.log(coupon.name + " " + couponValue)
        return coupon.name === couponValue
    })

    const resultP = document.getElementById("ResultPrice");
    if (!userCoupon) {
        resultP.innerText = "El cupón ingresado " + couponValue + " no es válido";
    } else {
        const discountValue = userCoupon.discount;
        resultP.innerText = "El precio con descuento es $" + calcularPrecioConDescuento(priceValue, discountValue);
    }
}

const coupons = [
    { name: "cupon1", discount: 15 },
    { name: "cupon2", discount: 30 },
    { name: "cupon3", discount: 25 }
]

var listaCupones = coupons.map(function (coupon) {
    return ' ' + coupon.name + ': ' + coupon.discount + '%'
})
document.getElementById("cupones").innerHTML = listaCupones;



