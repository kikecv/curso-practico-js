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
        return coupon.name === couponValue
    })
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const discountValue = userCoupon.discount;
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento es $" + calcularPrecioConDescuento(priceValue, discountValue);
    }
}

const coupons = [
    { name: "Cupon1", discount: 15 },
    { name: "Cupon2", discount: 30 },
    { name: "Cupon3", discount: 25 }
]


