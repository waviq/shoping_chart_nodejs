
/**
 * Created by Waviq on 7/28/17.
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let schema = new Schema({
    imagepath: {type: String, required: true},
    title:{type: String, required:true},
    description:{type: String, required: true},
    price:{type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
