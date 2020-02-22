let myData = {
    name: 'Rizky Arya Saputra',
	age: 21,
    address: 'Gaum rt 3 rw 4, Karanganyar',
    hobbies: ['futsal', 'jogging', 'game'],
    is_Married: false,
    school: {
        highSchool: 'SMA N 2 Karanganyar',
        university: 'STMIK Sinar Nusantara'
    },
    skills: [
        {
            Language: ['Indonesia', 'Inggris'], 
        },
        {
            programming: ['javascript', 'java', 'php']
        }
    ],
	interest_in_coding: true,
	
    toJson : function() {
        return JSON.stringify(myData);
    }
}

console.log(myData.toJson());