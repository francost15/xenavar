import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true,
}
);
export default mongoose.model("productos", taskSchema);