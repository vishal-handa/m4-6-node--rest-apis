const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...

const allclients=(req, res)=>{
    console.log(clients);
    res.json({status:200, message:clients})
}

const clientByID=(req,res)=>{
    let id=req.params.id;
    let client=clients.filter((el)=>{
        if(el.id===id){
            return el;
        }
    });
    res.json({status:200, message:client});
}

const addClient=(req, res)=>{
    let bool=false;
    clients.find((el)=>{
        if(req.body.email!=el.email && req.body.email.includes("@")){
            return bool=true;
        }
    })
    if(bool){
        let newclient=req.body;
        newclient.id=uuidv4();
        clients.push(newclient);
        return res.json({status:200, message:"client added:"+newclient})
    }
    else{
        return res.json({status:400, message:"Client already exists"})
    }
}

const deleteClient=(req, res)=>{
    let id=req.params.id;
    let deletethis=clients.filter((el)=>el.id!=id);
    if(deletethis.length>0){
        res.json({status:200, message:"client deleted"})
    }
    else{
        res.json({status:404, message:"client not found"})
    }
}

module.exports={ allclients, clientByID, addClient, deleteClient }