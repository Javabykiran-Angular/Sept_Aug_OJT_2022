//Array Of Object

let arr=[
    {
        id:9,
        fname:'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan",'May','Dec'],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:45
            },
            {
                subj:'M3',
                marks:55
            }
        ]
    },
    {
        id:6,
        fname:'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'Denmark'
        },
        month:["Feb",'Aug','Sept'],
        result:[
            {
                subj:'M1',
                marks:60
            },
            {
                subj:'M2',
                marks:65
            },
            {
                subj:'M3',
                marks:75
            }
        ]
    },
    {
        id:3,
        fname:'Spruha',
        lname:'Raokhande',
        country:{
            cid:4,
            cname:'Japan'
        },
        month:["March",'July','Oct'],
        result:[
            {
                subj:'M1',
                marks:45
            },
            {
                subj:'M2',
                marks:65
            },
            {
                subj:'M3',
                marks:85
            }
        ]
    }
]

// console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(`
        Id        :: ${arr[i].id}
        First Name:: ${arr[i].fname}
        Last Name :: ${arr[i].lname}
      Country Name:: ${arr[i].country.cname}
      Month       :: ${arr[i].month.join("  ")}
      ----------Result-------------
    `)

    arr[i].result.forEach((item)=>{
        console.log(`
                Subject :: ${item.subj}
                Marks   :: ${item.marks}
        `)
    })

}