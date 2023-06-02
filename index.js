AOS.init() ;
const quotes=document.getElementById('qoutes');
const author=document.getElementById('author');
const button=document.getElementById('btn');

let realdata='';


const getNewQuotes=()=>{
    let rnum=Math.floor(Math.random()*10);
    quotes.innerText=`${realdata[rnum].text}`
    
    realdata[rnum].author==null ? author.innerText='- Unknown' : author.innerText=`- ${realdata[rnum].author} ✍️`;

    console.log(rnum);
}

const getQuotes= async () => {
    const api="https://type.fit/api/quotes";
    console.log(api);
    try{
        let data=await fetch(api);
         realdata=await data.json();
       
        getNewQuotes();
        console.log(realdata);

    }catch(err){

    }
}
getQuotes();



button.addEventListener('click',getNewQuotes);

