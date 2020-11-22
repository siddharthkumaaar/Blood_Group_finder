const express = require("express")
const bodyParser = require("body-parser")
const {students} = require("./student")
const cors = require('cors')

const app = express()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/students',(req,res)=>{
    res.send(students)
})

app.get('/api/students/name',(req,res)=>{
    const name = req.query.name
    // console.log(name)
    const studnet = students.filter(item=>item.Name===name)
    if(studnet)
    {
     res.status(200).send(studnet)
    }
    else
    {
     res.status(404).send("Not Found")
    }
})

app.post('/api/students/addnew',(req,res)=>{
    const name = req.body.Name
    const email = req.body.Email
    const gender = req.body.Gender
    const bloodGroup = req.body.Blood_Group
    const city = req.body.City
    const imageLink = req.body.Image_Link

    const insertData = {
        Name:name,
        Email:email,
        Gender:gender,
        Blood_Group:bloodGroup,
        City:city,
        Image_Link:imageLink
    }
    // console.log(insertData)
    const length = students.push(insertData)
    if(length)
    {
        res.status(200).json("New record added successfully...")
    }
    else
    {
        res.status(400).json("Some Erorr Occured...!")
    }

})

app.delete('/api/students/name',(req,res)=>{
    const name = req.query.name
    // console.log(req.query)
    const index = students.findIndex(student=>{
        return (student.Name===name)
    })

    if(index >=0)
    {
        let std = students[index]
        students.splice(index,1)
        res.status(200).json(std)

    }
    else
    {
        res.status(404).json({error:"Error in deleting the students"})
    }
})

app.put('/api/students/name',(req,res)=>{
    const name = req.query.name
    // console.log(req.query)
    const newName = req.body.Name
    const email = req.body.Email
    const gender = req.body.Gender
    const bloodGroup = req.body.Blood_Group
    const city = req.body.City
    const imageLink = req.body.Image_Link

    const index = students.findIndex(student=>{
        return(student.Name===name)
    })

    if(index >=0){
        const updateStudent = students[index]

        updateStudent.Name = req.body.Name
        updateStudent.Email = req.body.Email
        updateStudent.Gender = req.body.Gender
        updateStudent.Blood_Group = req.body.Blood_Group
        updateStudent.City = req.body.City
        updateStudent.Image_Link = req.body.Image_Link

        res.status(200).json(updateStudent)
    }
    else
    {
        res.status(404).json({ error: "Updation of student failed" })
    }
})

app.listen(5000,()=>{
    console.log("Express server is running on port 5000.....")
})