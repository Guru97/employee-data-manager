var mongoose=require('mongoose');

var countryschema=mongoose.Schema({

    name:{ type: String},
    capital:{type:String}
});

module.exports=mongoose.model('schema',countryschema);