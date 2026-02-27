
import { v2 as cloudinary } from 'cloudinary';
import foodModel from '../Models/foodModel.js';



// add food

const addFood = async (req, res) => {

  try {


    // let foodData = JSON.parse(req.body.foodData)
    const { name, price, description, category } = req.body;

    const image = req.file;
    // let imageUrl = await promise.all(
    //   image.map(async (item) =>{
    //      let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
    //      return result.secure_url
    //   })
    // )

    //  await food.create({...foodData, image: imageUrl})

    if (!image) {
      return res.json({ success: false, message: "you need to upload an image" })

    }

    let result = await cloudinary.uploader.upload(image.path, { resource_type: 'image' })

    const foodData = {
      name, price: Number(price), description, category,
      image: result.secure_url,
      date: Date.now()
    }

    console.log(foodData);
    const food = new foodModel(foodData)
    await food.save();


    res.json({ success: true, message: "food added" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })


  }

}


const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({})
    res.json({ success: true, data: foods })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })


  }
}


const removeFood = async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.body.id)
    res.json({ success: true, message: "food removed successfully" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })


  }
}

const singleFood = async (req, res) => {

  try {
    const { foodId } = req.body
    const food = await foodModel.findById(foodId)

    res.json({ success: true, food })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })


  }
}


export { addFood, listFood, removeFood, singleFood }