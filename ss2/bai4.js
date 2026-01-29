let bookName =prompt("enter book name");
let borrowedname = prompt("enter brrower name");
let favoritelevel = pareseint(prompt("enter favorite level (1-5)"));
if(favoritelevel == 5 || favoritelevel==4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if (favoritelevel==3){
    console.log("sách này ok đọc đi");
}else if (favoritelevel == 2 || favoritelevel == 1){
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
}