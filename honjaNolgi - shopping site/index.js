const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})
// app.get('/dog', function (req, res) {
//     res.send({'sound': '멍멍'})
// })

// 파라미터로 받기
// app.get('/user/:id', function (req, res) {
//     const q = req.params
//     console.log(q.id)

//     res.send({'userid': q.id})
// })

// query로 받기
// app.get('/user/:id', function (req, res) {
//     const q = req.query
//     console.log(q)

//     res.send(`Users name is ${q.name}<br>`+
//             `userid: ${q.id}`)
    
// })

app.get('/sound/:name', function (req, res) {
    //const p = req.params
    //p.name  밑에 한 줄로 줄임
    const {name} = req.params

    if(name == "dog"){
        res.json({'sound':'멍멍', 'img':'http://res.heraldm.com/content/image/2015/10/14/20151014000668_0.jpg'})
    } else if(name == "cat"){
        res.json({'sound':'야옹', 'img':'https://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg'})
    } else if(name == "pig"){
        res.json({'sound':'꿀꿀', 'img':'https://contents.lotteon.com/itemimage/_v114633/LO/17/93/62/34/35/_1/79/36/23/43/6/LO1793623435_1793623436_1.jpg/dims/optimize/dims/resizemc/400x400'})
    } else{
        res.json({'sound':'알 수 없습니다'})
    }
    
})

app.get('/naver', function (req, res) {
    res.send("<a href='https://www.naver.com'>네이버로 가는 길</a>")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})