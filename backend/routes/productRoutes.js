const express = require('express');
const router = express.Router();


const {
  getAllProducts, 
  getProductById,
 } = require("../controller/productControllers");

//@desc GET all products from db
//@route Get /api/products
//@access public
router.get('/',getAllProducts) 
// => {
//      const {getAllProducts} = products;
//   try {
//     if (imageUrl) {
//       const uploadRes = await cloudinary.uploader.upload(imageUrl,{
//         upload_preset:"food order"
//       })
    
//      if (uploadRes){
//         const product = new product ({
//           getAllProducts,
//           imageUrl:uploadRes
//         })
//       }
//     }
//   }catch(error){
//     console.log(error);
//     res.status(500).send(error)
//   }
// })

//@desc GET all products by id from db
//@route Get /api/products/:id
//@access public
// router.get('/:id', getProductById);

router.get('/', getProductById) 
// => {
//   const {getAllProductById} = products;
// try {
//  if (imageUrl) {
//    const uploadRes = await cloudinary.uploader.upload(imageUrl,{
//      upload_preset:"food order"
//    })
 
//   if (uploadRes){
//      const product = new product ({
//        getAllProductById,
//        imageUrl:uploadRes
//      })
//    }
//  }
// }catch(error){
//  console.log(error);
//  res.status(500).send(error)
// }
// })

module.exports = router;
