const readline=require('readline');

const r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout

});
r1.question("Enter any factorial number :",(input)=>{
     const n=parseInt(input);
      var fact =1;

     for(var i=1;i<=n;i++){
        fact=fact*i;

     }
     console.log(`factroial  of ${n} is ${fact}`);
  r1.close();
});
