import Mock from "mockjs"
Mock.mock("/list","get",{

    "list|5":[
        {
            "title|+1":["全部","儿童故事","启蒙课堂","其他","国学经典"],
            "children|10":[
            {"id|+1":[0,1,2,3,4,5,6,7,8,9],
            "img":"@image(100x100)",
            "name":"@cname",
            "context":"@cparagraph(2)",
            "txt":"@cparagraph(1)"}
        ]
        }
    ]
})