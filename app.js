const express=require('express');
var app=new express();
var bodyParser=require('body-parser');
const cors=require('cors');
app.options('*',cors())
app.use(cors());


app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get('/1',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');

    res.send({"description":"Simple Mask Man", "external_url":"https://gateway.pinata.cloud/ipfs/QmVUdLrUc4nFAvrV1sPwyaM7bpq1szRkNCnCS7JuMzXBZ4/", "image": "https://gateway.pinata.cloud/ipfs/QmVUdLrUc4nFAvrV1sPwyaM7bpq1szRkNCnCS7JuMzXBZ4/", "name":"Mask Man #1", "attribute":[{"trait_type":"background","value":"White"}, {"trait_type":"Mask","value":"Black"}]} )
});
app.listen(process.env.PORT || 4000, function(){
    console.log('listing to port 4000')
});
