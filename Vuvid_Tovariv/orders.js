function to_Order(){
let orders = JSON.parse(localStorage.getItem('prod'))
let suma = 0;
orders.forEach(prod => {
    suma = suma + Number(prod.price);

})
 let order = {
    user_pib: user_pib.value,
    user_sity: user_sity.value,
    user_phone: user_phone.value,
    user_address: user_address.value,
    suma: suma
 }   
 db.collection('all_orders').add(order).then(res =>  {
 console.log('Успіх!')})
}
to_Order()