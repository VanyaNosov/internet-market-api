import mongoose from "mongoose"; 
 
 
const NewsSchema = new mongoose.Schema( 
    { 
        title: { 
            type: String, required: true, unique: true, 
        }, 
        img: { 
            type: String, 
        }, 
        images: { 
            type: [String], 
            default: [], 
        },
        descr: { 
            type: String, required: true 
        }, 
    }, 
    { 
        timestamps: true 
    } 
) 
 
const News = mongoose.model('News', NewsSchema); 
 
export default News