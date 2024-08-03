//activity-1(Obect Creation and Access)

//task-1

let book = {
    title : "Concepts of Physics",
    author : "HC Verma",
    publicationYear : 1999
}

console.log(book);

//task-2

console.log(book.title); //output : Concepts of Physics
console.log(book.author); //output : HC Verma


//activity-2(Object Methods)
//task-3

let books = {
    title : "Concepts of Physics",
    author : "HC Verma",
    publicationYear : 1999,
    result : function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
}

books.result(); //output : Title: Concepts of Physics, Author: HC Verma


//task-4

let booky = {
    title : "Concepts of Physics",
    author : "HC Verma",
    publicationYear : 1999,
    result : function (year){
        this.publicationYear= year;
    }
}

booky.result(2000);
console.log(booky.publicationYear); //output : 2000


//activity-3 (Object Nested)

//task-5

let library = {
    name : "ABC Library",
    books : [
        {
            title : "Concepts of Physics",
            author : "HC Verma",
            publicationYear : 1999
        },
        {
            title : "Mathematics",
            author : "N.C. Ramanujan",
            publicationYear : 1990
        }
    ],
    retrieveTitleAndAuthor: function() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }
}


//task-6

console.log(library.name); //output : ABC Library

library.books.forEach(book => {
    console.log(book.author);
});

//output : HC Verma N.C. Ramanujan

//task-7

library.retrieveTitleAndAuthor();

//output : 
// Title: Concepts of Physics, Author: HC Verma
// Title: Mathematics, Author: N.C. Ramanujan


//activity-4 (Object Iteration)

//task-8

for (let key in library) {
    if (typeof library[key] === 'object') {
        console.log(library[key]);
    }
}

//output : 
// [
//     {
//         title: 'Concepts of Physics',
//         author: 'HC Verma',
//         publicationYear: 1999
//       },
//       {
//         title: 'Mathematics',
//         author: 'N.C. Ramanujan',
//         publicationYear: 1990
//       }
//     ]


//task-9

console.log(Object.keys(library.books)); 
//output: ["0", "1"]

console.log(Object.values(library.books)); 
//output: 
// [ {
//     title: 'Concepts of Physics',
//     author: 'HC Verma',
//     publicationYear: 1999
//   },
//   {
//     title: 'Mathematics',
//     author: 'N.C. Ramanujan',
//     publicationYear: 1990
//   }
// ]