const CommModel = require("../Models/CommunitySchma")


const newMemberHandler = async (req, res) => {

    try {
        const newBody = req.body;
        const newMember = new CommModel(newBody);
        console.log(newMember)
        await newMember.save();
        res.status(201).json({ memId: newMember._id });
    } catch (error) {
        res.status(500).json({msg:"Server Error"})
    }

}

const getMemberList = async (req,res)=>{
    try{
        const members = await CommModel.find({});
        res.json(members);
    }catch(error){
        res.status(500).json({msg:"Server Error"})
    }
}
const deleteMember = async(req,res)=>{
    const {id} = req.params;
    // console.log(id)
    try{
        const members = await CommModel.findByIdAndDelete({_id:id});
        res.status(200).json({msg:"member deleted"});
    }catch(error){
        res.status(500).json({msg:"Server Error"})
    }
}


module.exports = {
    newMemberHandler,
    getMemberList,
    deleteMember
}