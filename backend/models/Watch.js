import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  gender: { type: String, enum: ['Men', 'Women', 'Unisex'], required: true },
  category: { 
    type: String, 
    enum: [
      'PRESTIGE PULSE',
      'TIMELESS TECH',
      'SIGNATURE CRAFT',
      'PREMIUM ESSENTIALS',
      'ELITE CLASSICS',
      'PRESTIGE ICONS',
      'MASTERPIECES'
    ],
    required: true 
  },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String }
});

const Watch = mongoose.model('Watch', watchSchema);
export default Watch;