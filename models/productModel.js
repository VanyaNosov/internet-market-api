import mongoose from "mongoose"; 
 
const reviewSchema = new mongoose.Schema( 
    { 
      name: { type: String, required: true }, 
      comment: { type: String, required: true }, 
      rating: { type: Number, required: true }, 
    }, 
    { 
      timestamps: true, 
    } 
  ); 
 
const featureSchema = new mongoose.Schema( 
{ 
    name: String, 
    text: String, 
}, 
{ 
    timestamps: true, 
} 
); 
   
 
const productSchema = new mongoose.Schema( 
    { 
        name: { 
            type: String, required: true, unique: true, 
        }, 
        img: { 
            type: String, 
        }, 
        images: { 
            type: [String], 
            default: [], 
        },
        slug: {type: String, required: true, unique: true},
        brand: { 
            type: String, required: true 
        }, 
        category: { 
            type: String, required: true 
        }, 
        descr: { 
            type: String, required: true 
        }, 
        price: { 
            type: Number, required: true 
        }, 
        rating: { 
            type: Number, required: true, default: 0, 
        }, 
        features: [featureSchema], 
        reviews: [reviewSchema], 
        discount: {type: Number, default: 0}, 
        isNew: {type: Boolean, default: true}, 
        isSale: {type: Boolean, default: true}, 
    }, 
    { 
        timestamps: true 
    } 
) 
 
const Product = mongoose.model('Product', productSchema); 
 
export default Product