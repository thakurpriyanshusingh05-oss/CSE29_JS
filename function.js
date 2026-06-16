function calculateResult(){
    let n=document.getElementById("subjects").Value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("enter the marks of the subjects"+(i+1)));
        total+=x;

    }
    let average=total/n;
    let grade;
    if(average>90)
        grade='A+';
    elseif(average<90 && average>80)
        grade='B';
    elseif(average<80 && average>70)
        grade='C';

}

let result=document.getElementById("result").innerHTML="Total Marks"+total+"<br/>"+"Average MARKS"+average+"<br/>"



function countVowels(str){
    let count=0;
    for(const char of str){
        if(
            char==="a"|| 
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"
        ) {
          count++;
        }

}
console.log(count);
}
countVowels("")