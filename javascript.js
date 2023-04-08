'use strict';
const firebaseConfig = {
    apiKey: "AIzaSyDdd7UW2GNXvqpRQscncr3-qSJYUF2vol8",
    authDomain: "fir-contact-1d5b7.firebaseapp.com",
    databaseURL: "https://fir-contact-1d5b7-default-rtdb.firebaseio.com",
    projectId: "fir-contact-1d5b7",
    storageBucket: "fir-contact-1d5b7.appspot.com",
    messagingSenderId: "627912418444",
    appId: "1:627912418444:web:030949dc32f53dce3387a9",
    measurementId: "G-HB0N75P5ML"
  };
firebase.initializeApp(firebaseConfig);
// const databse=firebase.database().ref("databasestore");
// document.querySelector('.bt').addEventListener('click',function(){
//     var push=databse.push();

// push.set({
//     name:document.querySelector('#username').value,
//     password:document.querySelector('#password').value,
// });
// database.on("value", function (snapshot) {
//     snapshot.forEach(function (element) {
//      console.log(element.val())
    
//     });
//   });
// });
const detail=[];
const database=firebase.database().ref("databasestore");
database.on("value",function(snapshot){
snapshot.forEach(function(element){
  var a=element.val();
  // console.log(a);
detail.push(a);
});
});

document.querySelector('.bt').addEventListener('click',function(){
  let c=0;
  // console.log(detail)
  for(let i=0;i<detail.length;i++){
 if(detail[i].name==document.querySelector('#username').value) c++;
}
if(c==0){
  var push=database.push();
  push.set({
    name:document.querySelector('#username').value,
  })
}
else alert("dai k**** l**** s***** alread login pannita   panni...... ");
})
//   database.on("value", function (snapshot) {
//         snapshot.forEach(function (element) {   
//             var a=element.val();
//        console.log(a.name);
// else console.log("exist");
// })
// }) 

  // var push=database.push();
//   push.set({
    //     name:,
    //     password:document.querySelector('#password').value,
    // }) 
    // console.log(c);
    // database.ref('users').once('value', (snapshot) => {
    //   snapshot.forEach((childSnapshot) => {
    //     const childData = childSnapshot.val();
    //     myArray.push(childData);
    //   });
    //   console.log(myArray);
    // });
    // database.ref('myData').on('value', function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childData = childSnapshot.val();
    //     myArray.push(childData);
    //   });
    // });