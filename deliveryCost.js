function  deliveryCost(quantity)
{
    const shirtPriceFirst100=100;
    const shirtPriceSecond100 =80;
    const shirtPriceThird=50;
        if(quantity <= 100){
        const price1 =  quantity * shirtPriceFirst100 ;
        return price1;
        }
    else if( quantity <= 200){
       const first100 = 100 * shirtPriceFirst100;
        const restShirt = quantity - 100;
        const second100 = restShirt * shirtPriceSecond100 ;
        const price2 = first100 + second100;
        return price2;
    }
     else{ 
        const first100 = 100 * shirtPriceFirst100;
        const second100 = 100 * shirtPriceSecond100 ;
        const restShirt = quantity - 200;
        const restShirt2 = restShirt * shirtPriceThird; 
         const price3 = first100 + second100 + restShirt2;
        return price3;
     }
 }