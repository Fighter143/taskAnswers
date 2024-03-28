let data = {
    "gadgets": [
        {
            id: 1, category: "laptop", products: [
                { company: "hp", configuration: "220GB SSD / 8GB RAM / I3 Intel" },
                { company: "lenovo", configuration: "1 TB HDD / 12 GB RAM / I5 Intel" },
                { company: "asus", configuration: "500 GB HDD / 250 GB SSD / 8 GB RAM / I7 Intel" }]
        },

        {
            id: 2, category: "smartwatch", products: [
                { company: "aple", configuration: "13 Apps / 20 Hrs Standby / 40 Features" },
                { conpmany: "samsung", configuration: "14 Apps / 13 Hrs Standby / 34 Features" }]
        },

        {
            id: 3, category: "camera", products: [
                { company: "sony", configuration: "40X Zoom / 3 Hrs Standby / 40 GB Storage" },
                { company: "cannon", configuration: "30X Zoom / 5 Hrs Standby / 50 GB Storage" }
            ]
        }
    ]
}

let colors = {
    'red': '#FF0042',
    'blue': '#FF8123',
    'orange': '#FF7831',
    'yellow': '#90FF23',
    'pink': '#77FF22'
}

certifications = [
    'AMAZON Solution Architects',
    'AZURE Cloud Developer',
    'GOOGLE Cloud Developer'
];


// //Q1. Write a function to add one more color and color-code in given array then 

// let addNewColor = (colorCode, colorName) => {
//       colors[colorName] = colorCode
//      return colors

// }
// console.log(addNewColor("#FF0011", "voilet"));

// // Q2. Write a function to count number of products for each gadget and return from function 


// let laptop = 0
// let smartphone = 0
// let camera = 0


// for (var i = 0; i < data.gadgets.length; i++) {
//     if (data.gadgets[i].category = "laptop") {
//         let ans = laptop++;
//         console.log("Laptop = ", ans)
//     }
//     else if (data.gadgets[i].category = "smartphone") {
//         let ans = smartphone++;
//         console.log("smartphone = ", ans)
//     }
//     else if (data.gadgets[i].category = "camera") {
//         let ans = camera++;
//         console.log("camera = ", ans)
//     }


// }


// Q3. Write a function to take any gadget name as argument and check that exist in array or not. Return "true" if exist otherwise return "false" 




// let searchGadget = (userGadgetName) => {

//     let gadgets = ["smartphone", "laptop", "smartwatch"];
//     userGadgetName = userGadgetName.toLowerCase();

//     for (let i = 0; i < gadgets.length; i++) {
//         let currentGadgetName = gadgets[i].toLowerCase();
//         if (currentGadgetName === userGadgetName) {
//             return "true";
//         }
//     }
//     return "false";
// }

// console.log("searchGadget = " + searchGadget("laptop"));



// Q4. Write a function to take any gadget name as argument and delete from array.show updated array record return from function 
// let deleteGadget = (userGadgetName) => {
//     let gadgets = ["camera", "laptop", "smartwatch"];
//     userGadgetName = userGadgetName.toLowerCase();
//     let index = gadgets.findIndex(gadgets => gadgets.toLowerCase() === userGadgetName);
//     if (index !== -1) {
//         gadgets.splice(index, 1);
//     }
//     return gadgets;
// }

// console.log("delete gadget = ", deleteGadget("camera"));



// Q5. Write a function to prepare array containing product names of each gadget along with its configuration order by product names in each category 


// let ans1 = [];
// for (var i = 0; i < data.gadgets.length; i++) {
//     var { company, configurations } = data.gadgets[i];
//     ans1.push({ 'company': [i], 'configurations': [i] })
// }

// console.log(ans1);


// Q6. Write a function to update Certifications in following format.

// function updateCertifications(certifications) {
//     let updatedCertifications = [];

//     for (let i = 0; i < certifications.length; i++) {
//         updatedCertifications.push({ 'index': i, 'certification': certifications[i] });
//     }

//     return updatedCertifications;
// }
// // Call the function and print the result
// let updated = updateCertifications(certifications);
// console.log(updated);


// Q7. Write a function to print which smartwatch has maximum number of apps

let maxApps = Number.MIN_VALUE;
let maxAppsSmartwatch = null;

for (var i = 0; i < data.gadgets.length; i++) {
    var { configuration } = data.gadgets[i];

    configuration = Number(configuration.split(" ")[1]);
    if (configuration > maxApps) {
        maxApps = configuration;
        maxAppsSmartwatch = data.gadgets[i];
    }
}

console.log("The smartwatch with the maximum number of apps is: ", maxAppsSmartwatch);


// Q.8 Write a function to print which camera has maximum storage space.

// function maxStorageCamera(data){
//     let maxStorage = 0;
//     let camera = null;
//     for(var gadget of data.gadgets){
//         if (gadget.category === "camera"){
//             for (var product of gadget.products){
//                 var storage = Number(product.configuration.split(' ')[0]);
//                 if (storage<maxStorage){
//                     maxStorage = storage;
//                     camera = product;
//                 }
//             }
//         }
//     }
//     if(camera){
//         console.log('Camera with maximum storage space: ${camera.company}');
//     }
//     else{
//         console.log('no camera was found');
//     }
//  }
// maxStorageCamera(data);
