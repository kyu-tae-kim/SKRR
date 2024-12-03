const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// multer
const storage = multer.diskStorage({
    destination : '../upload/',
    filename : (req, res, cb)=>{
        cb(null, `${Date.now()}-${res.originalname}`)
    }
})

const upload = multer({storage})

router.post('/upload', upload.single('image'), (req, res)=>{
    const imageUrl = `server/uploads/${req.file.filename}`
    res.json({ imageUrl })
    console.log(imageUrl)
})

router.get('/', (req, res)=>{
    const dirPath = path.join(__dirname, '/uploads');
    fs.readdir(dirPath, (err, files)=>{
        if (err) {
            return res.status(500).json({error: '디렉토리 없음'})
        }
        const imageUrls = files.map(file=> `/uploads/${file}`)
        res.json(imageUrls)
    })
})


module.exports = router;