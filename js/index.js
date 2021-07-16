let profileButton = false;
let menuButton = false;

const profile = document.getElementsByClassName('profile')[0];

const profileInfo = document.getElementsByClassName('profile-info')[0];

const menu = document.getElementsByClassName('menu')[0];
const menuInfo = document.getElementsByClassName('menu-info')[0];

const search = document.getElementsByClassName('search')[0];

const hidden = document.getElementsByClassName('inputHidden')[0];



//search.value 추적하면 됌

/*
1. 클릭시 ,  어떤 반응을 해야함
2. 클릭시 , 숨겨진 div를 보이게 하자 -> profileButton 값이 true일때 , 보이게하자


3. pB 이 false이면 안보이게 하자
*/


//1

const profileHandler = (e) => {
    if(profileButton){
        profileButton = false;
    }else{
        profileButton = true;
    }


    if(profileButton){

        menuButton = false;
        menuInfo.style.display = 'none';
        profileInfo.style.display = 'block';
    }else{
        profileInfo.style.display = 'none'
    }
}

const menuHandler = e => {
    if(menuButton){
        menuButton = false;
    }else{
        menuButton = true;
    }


    if(menuButton){
        profileButton = false;
        profileInfo.style.display = 'none';
        menuInfo.style.display = 'block';
    }else{
        menuInfo.style.display = 'none'
    }

}

const searchHandler =  (e) => {


    const value = e.target.value;
    
    const length = value.length;


    if(length){
        hidden.style.display = 'flex';
    }else{
        hidden.style.display = 'none';
    }

}

profile.addEventListener('click' , profileHandler );

menu.addEventListener('click' , menuHandler );

search.addEventListener('keyup', searchHandler)