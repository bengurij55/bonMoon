function myBlend(arr) {
    return arr.sort(() => Math.random() - 0.5); 
}; 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before blending:", arr);
myBlend(arr);
console.log("After blending:", arr);

//////////////////////////////////////////////////

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};




function findValueByKey(companyName) {
    if (companyName == company.name) {
        console.log('Інформація про компанію:');
        console.log(`Назва компанії: ${company.name}`);
        console.log(`Тип компанії: ${company.type}`);
        console.log(`Використовує: ${company.platform}`);
        console.log(`Продає: ${company.sellsSolution}`);
        return;
      }  
      company.clients.forEach(client => {
        typeValueForCheck = client.type.slice(0,3);
        if (client.name === companyName && typeValueForCheck) {
            console.log('Інформація про компанію:');
            console.log(`Назва компанії: ${client.name}`);
            console.log(`Тип компанії: ${client.type}`);
            console.log(`Використовує: ${client.uses}`);
            console.log(`Продає: ${client.sells}`);
            };
      })
    }
        // Can't do the same for the partners :( 

        findValueByKey('Клієнт 2');
