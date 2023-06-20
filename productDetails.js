// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIuXVJkHgsLN-gxvD2pfUP3Tyqp3Xde8A",
  authDomain: "flo-ecommerce.firebaseapp.com",
  projectId: "flo-ecommerce",
  storageBucket: "flo-ecommerce.appspot.com",
  messagingSenderId: "546995459782",
  appId: "1:546995459782:web:f4d158b4a981219917a9c7",
};

const app = firebase.initializeApp(firebaseConfig);

// Access the Firestore service
const db = firebase.firestore(app);




const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

console.log(projectId);

const docRef = doc(db, "product", productId);




// getDoc(docRef)
//   .then((docSnapshot) => {
//     if (docSnapshot.exists()) {
//       const productData = docSnapshot.data();
//       singleProduct.push(productData);
//       // Process the product data and display it in the desired way
//     } else {
//       console.log("No such document!");
//     }
//   })
//   .catch((error) => {
//     console.log("Error getting document:", error);
//   });
// console.log(singleProduct, "singleProduct");
// console.log(productDetailUrl);
