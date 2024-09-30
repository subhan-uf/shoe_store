export const getDiscountedPricePercent= (orignalPrice, discountedPrice) =>{
    const discount= orignalPrice-discountedPrice;

    const discountPercent= (discount/orignalPrice) *100;
    return discountPercent.toFixed(0);
}