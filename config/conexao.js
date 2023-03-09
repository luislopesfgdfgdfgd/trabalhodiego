const mongoose = require("mongoose");
const banco =
  "mongodb://arevoltadonegao:luis1005@ac-yt7mhly-shard-00-00.gkk0fl9.mongodb.net:27017,ac-yt7mhly-shard-00-01.gkk0fl9.mongodb.net:27017,ac-yt7mhly-shard-00-02.gkk0fl9.mongodb.net:27017/?ssl=true&replicaSet=atlas-10zxx0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;