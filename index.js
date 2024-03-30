var count = 0;
var b = ['https://www.madeeasy.in/Uploads/banner/432hbanner_Holiofferbanner.jpg',
 'https://www.madeeasy.in/Uploads/banner/441hbanner_EC.jpg',
 'https://www.madeeasy.in/Uploads/banner/440hbanner_EE(3).jpg', 
'https://www.madeeasy.in/Uploads/banner/439hbanner_ME.jpg'];
var c = document.querySelector('.img');
var before= document.querySelector('.previous');
var after= document.querySelector('.next');
const t = b.length
const fun = () => {
    if (count > (t - 1))
        count = 0
    else {

        console.log(count);
        console.log(b[count])
        c.src = b[count];
        ++count;
    }   
}
setInterval(fun, 3000);




function previous(){
    if(count==0)
    {
        count=b.length
    }
    else{
        --count;
        c.src = b[count];
        
    }

}

function next(){
    if(count>=(b.length-1))
    {
        count=0;
    }

    else{
        ++count;
        c.src = b[count];
    
    }

    
    }
    
before.addEventListener("click",previous)
after.addEventListener("click",next)


    var count1 = 0;
var b1 = ['https://www.madeeasy.in/Uploads/image/2440imguf_books-posts-EC.jpg',
 'https://www.madeeasy.in/Uploads/image/2441imguf_books-posts-CS.jpg',
 'https://www.madeeasy.in/Uploads/image/2442imguf_books-posts-IN.jpg', 
'https://www.madeeasy.in/Uploads/image/2438imguf_books-posts-ME.jpg'];
var c1 = document.querySelector('.img5');
var before1= document.querySelector('.previous1');
var after1= document.querySelector('.next1');
const t1 = b1.length
const fun1 = () => {
    if (count > (t1 - 1))
        count1 = 0
    else {

        console.log(count1);
        console.log(b1[count1])
        c1.src = b1[count];
        ++count1;
    }   
}
setInterval(fun1, 3000);




function previous1(){
    if(count1==0)
    {
        count1=b1.length
    }
    else{
        --count1;
        c1.src = b1[count1];
        
    }

}

function next1(){
    if(count1>=(b1.length-1))
    {
        count1=0;
    }

    else{
        ++count1;
        c1.src = b1[count1];
    
    }

    }
    before1.addEventListener("click",previous1)
    after1.addEventListener("click",next1)
        