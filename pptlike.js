function firsttext(a){
    document.querySelector('.firsttext').style.display='none'; 
    if (a == 'last'){ 
        document.querySelector('.nexttext').style.display='block';
    } else { 
        document.querySelector('.secondtext').style.display='block'; 
    }
}
function secondtext(a){ 
    document.querySelector('.secondtext').style.display='none'; 
    if (a == 'last') { 
        document.querySelector('.nexttext').style.display='block'; 
    } else { 
        document.querySelector('.thirdtext').style.display='block'; 
    }
}
function thirdtext(a){
    document.querySelector('.thirdtext').style.display='none';
    if (a == 'last') {
        document.querySelector('.nexttext').style.display='block';
    } else {
        document.querySelector('.fourthtext').style.display='block';
    }
}