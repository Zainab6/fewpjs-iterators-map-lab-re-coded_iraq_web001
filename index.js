const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 
  function titleCased(){
    let t = tutorials.map(x=>{
     return  x.split(" ")
      for (let i=0 ; i<t.length;i++){
        t[i] = t[i].charAt(0).toUpperCase() + t[i].slice(1)
      }
      return t.join("")
      })
       
  }



//function titleCased(tutorials){
  //return tutorials.map(tutorial => {
  //tutorial.split(" ")})
  //for (let i=0 ; i<tutorial.length;i++){
    //tut = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice
  //}
  //return tut.join("")
  //}
  
  
  
 

