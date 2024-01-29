const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks=books.filter(
    (bk)=> (bk.genre==="History")    

  )

  console.log(userBooks);

  const published=books.filter(
    (bk)=>{
        if(bk.publish>=2000)
            return bk
    }
  )

  console.log(published);

  const _1995_and_history=books.filter(
    (bk)=> (bk.genre=="History" && bk.publish>1995)
  )

  console.log(_1995_and_history);
//We use filter for filtering uing true false returns
//but for map we do operations and then get the return 
  
//For each didn't return anything but map does
  const myNumbers=[1,2,3,4,5,6,7,8,9]
  const newNums=myNumbers.map(
    (item)=>{
      return item=item+10
    }
  )

  console.log(newNums);


  //CHAINING

  const chain=myNumbers.map(
    (num)=>{ return num*10}  //Here we multiply by 10
  ).map(
    (num)=>{ return num+1} //we get the multiplied value,now
    //we are adding 10 to it
  ).filter(
    (num)=>{
      if(num>=40)
        return num   //getting values greater than 40 after chaining operations
    }
  )


  console.log(chain);