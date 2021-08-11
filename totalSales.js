function totalSales(shirt, pant, shoe) {
    if ((shirt >= 0) && (pant>= 0) && (shoe >= 0)) {
        // shirt price = 100, pantprice = 200, shoe price = 500
        return ((100 * shirt) + (200 * pant) + (500 * shoe));
    }
    else {
        return "Invalid Input!";
    }
}