
export const parseCurrencyValueToUSD = (value: string) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    const cost =
        value.indexOf(",") > -1
            ? value.replace(",", ".")
            : value;
    const number = parseFloat(cost);
    const price = formatter.format(number);

    return price
}