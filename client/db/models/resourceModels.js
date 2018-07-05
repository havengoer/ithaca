const mongoose = require('mongoose');
// mongodb://person:password123@ds125831.mlab.com:25831/ithaca-project
const Schema = mongoose.Schema;

const resource = new Schema ({
    type:           {type: String, required: true},
    company_name:   {type: String, required: true},
    address:        {type: String, required: false},
    contact_number: {type: String, required: true},
});

// hours: {
//     day: '',
//     opening_time: <time>,
//     closing_time: <time>,
//     lunch_start_time: <time>,
//     lunch_end_time: <time>
// }
const Resource = mongoose.model('Resource', resource);
module.exports = Resource;