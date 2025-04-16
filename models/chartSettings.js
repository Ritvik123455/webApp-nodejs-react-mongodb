import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    labels : [String],
    colors : [String],
    numbers : [Number]
});
//OLD CODE 
//module.exports = mongoose.model('chartSetting', chartSchema); //First parameter must be singular version of the collction.
export default mongoose.model('chartSetting', chartSchema);