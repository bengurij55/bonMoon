
//getInfo function

var Dog = {
sex: 'Male',
color: 'Black',
BarkOrNo: 'yes',
};

function getInfo (obj) {
    for (let key in obj){
        console.log(key + ': ' + obj[key]);
}
};

getInfo(Dog);
Dog.angry = 'yes';
console.log('*************')
getInfo(Dog);

//////////////////////////////////////

//Services

var services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

	"Миття голови": "100 грн"

};

function price (obj) {
    var totalPrice = 0;
    for(let key in obj) {
        totalPrice += parseInt(obj[key]);
        }
        console.log('Cумма всех доступных услуг = '+ totalPrice + ' грн');
} 
price(services);

function minPrice (obj) {
    var minValue = parseInt(obj[Object.keys(obj)[0]]);
    for(let key in obj) {
        if (parseInt(obj[key]) < minValue) {
            minValue = parseInt(obj[key]);
        }
        }
        console.log('Самая дешевая услуга = '+ minValue + ' грн');
} 
minPrice(services);

function maxPrice (obj) {
    var maxValue = parseInt(obj[Object.keys(obj)[0]]);
    for(let key in obj) {
        if (parseInt(obj[key]) > maxValue) {
            maxValue = parseInt(obj[key]);
        }
        }
        console.log('Самая дорогая услуга = '+ maxValue + ' грн');
    }
maxPrice(services);


