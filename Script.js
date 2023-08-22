let audio = new Audio('./songs/Tu Hai To Mujhe Phir Aur Kya Chahiye.mp3');
songindex = 0;
// audio.play()
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'))
let playsong = Array.from(document.getElementsByClassName('playsong'))
let songs = [
    {songname:'Tu Hai To Mujhe Phir Aur Kya Chahiye',filepath:'./songs/Tu Hai To Mujhe Phir Aur Kya Chahiye.mp3',coverpath:'./cover/1.jpg'},
    {songname:'Har Har Shambhu Shiv Mahadeva',filepath:'./songs/Har Har Shambhu Shiv Mahadeva.mp3',coverpath:'./cover/2.jpg'},
    {songname:'Raatan Lambiyan',filepath:'./songs/Raatan Lambiyan.mp3',coverpath:'./cover/3.jpg'},
    {songname:'Kesariya',filepath:'./songs/Kesariya.mp3',coverpath:'./cover/4.jpg'},
    {songname:'Dil Galti Kar Baitha Hai',filepath:'./songs/Dil Galti Kar Baitha Hai.mp3',coverpath:'./cover/5.jpg'},
    {songname:'Tere Mere',filepath:'./songs/Tere Mere.mp3',coverpath:'./cover/6.jpg'},
    {songname:'Jhoome Jo Pathaan',filepath:'./songs/Jhoome Jo Pathaan.mp3',coverpath:'./cover/7.jpg'},
    {songname:'Ram Siya Ram - Adipurush',filepath:'./songs/Ram Siya Ram - Adipurush.mp3',coverpath:'./cover/8.jpg'},
    {songname:'Naseeb Se - Satyaprem Ki Katha',filepath:'./songs/Naseeb Se - Satyaprem Ki Katha.mp3',coverpath:'./cover/9.jpg'},
    {songname:'Zihaal e Miskin - Vishal Mishra',filepath:'./songs/Zihaal e Miskin - Vishal Mishra.mp3',coverpath:'./cover/10.jpg'},
    {songname:'Meethi Meethi',filepath:'./songs/Meethi Meethi.mp3',coverpath:'./cover/11.jpg'},

];
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause')  
        gif.style.opacity = 1 
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play')
        gif.style.opacity = 0
    }
})

audio.addEventListener('timeupdate',()=>{
    progress = parseInt((audio.currentTime/audio.duration) * 100)
    progressbar.value = progress;
})
progressbar.addEventListener('change',()=>{
    audio.currentTime = progressbar.value * audio.duration/100;
})

const MakeAllPlays = ()=>{
    playsong.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
    
}


playsong.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{

        MakeAllPlays();
        songindex = parseInt(e.target.id)
        if(audio.paused)
        {
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audio.src = songs[i].filepath;
        mastersongname.innerText = songs[i].songname;
        audio.currentTime = 0;
        audio.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audio.pause();
        playsong.classList.remove('fa-pause');
        playsong.classList.add('fa-play')
        gif.style.opacity = 0;
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play')  
    }
    })
   
})
