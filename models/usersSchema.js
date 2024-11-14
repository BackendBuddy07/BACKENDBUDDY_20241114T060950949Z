const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
{
    name: { 
        type: String,
        required: true,
        unique: false
    },
choices : [
{ 
  
   undefined: { 
        type: undefined,
        required: undefined,
        unique: undefined
    
},
}
],
});

module.exports = mongoose.model('Users', UsersSchema);
