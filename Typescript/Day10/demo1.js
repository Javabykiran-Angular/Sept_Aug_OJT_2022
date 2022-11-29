//Array Of Object
var arr = [
    {
        id: 9,
        fname: 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", 'May', 'Dec'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 55
            }
        ]
    },
    {
        id: 6,
        fname: 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'Denmark'
        },
        month: ["Feb", 'Aug', 'Sept'],
        result: [
            {
                subj: 'M1',
                marks: 60
            },
            {
                subj: 'M2',
                marks: 65
            },
            {
                subj: 'M3',
                marks: 75
            }
        ]
    },
    {
        id: 3,
        fname: 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 4,
            cname: 'Japan'
        },
        month: ["March", 'July', 'Oct'],
        result: [
            {
                subj: 'M1',
                marks: 45
            },
            {
                subj: 'M2',
                marks: 65
            },
            {
                subj: 'M3',
                marks: 85
            }
        ]
    }
];
// console.log(arr)
for (var i = 0; i < arr.length; i++) {
    console.log("\n        Id        :: ".concat(arr[i].id, "\n        First Name:: ").concat(arr[i].fname, "\n        Last Name :: ").concat(arr[i].lname, "\n      Country Name:: ").concat(arr[i].country.cname, "\n      Month       :: ").concat(arr[i].month.join("  "), "\n      ----------Result-------------\n    "));
    arr[i].result.forEach(function (item) {
        console.log("\n                Subject :: ".concat(item.subj, "\n                Marks   :: ").concat(item.marks, "\n        "));
    });
}
