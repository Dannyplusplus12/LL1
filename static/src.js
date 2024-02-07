

let s_btn = document.querySelectorAll('.s-btn')
var soundPlayer = null

for(let index = 0; index < 8; ++index) {
    console.log(s_btn[index].children[0])
    s_btn[index].addEventListener('click', () => {
        for(let i = 0; i < 8; ++i) {
            s_btn[i].children[0].classList.remove('hide')
            s_btn[i].children[1].classList.add('hide')
        }
        s_btn[index].children[0].classList.add('hide')
        s_btn[index].children[1].classList.remove('hide')
        // bg_choice = index
        
        
        try {
            soundPlayer.pause();
            soundPlayer.currentTime = 0;
        }
        catch(err) {
            
        }

        soundPlayer = new Audio('../static/sound/' + index + '.mp3');
        console.log(soundPlayer)
        soundPlayer.play();
    })
}

let to_btn = document.querySelectorAll('.to')
let to_selected = -1
for(let index = 0; index < to_btn.length; ++index) {
    to_btn[index].addEventListener('click', ()=>{
        to_selected = index
        for(let i = 0; i < to_btn.length; ++i) {
            to_btn[i].classList.remove('selected')
            if(i == to_selected) {
                to_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#ty"
    })

}

let ty_btn = document.querySelectorAll('.ty')
let ty_selected = -1
for(let index = 0; index < ty_btn.length; ++index) {
    ty_btn[index].addEventListener('click', ()=>{
        ty_selected = index
        for(let i = 0; i < ty_btn.length; ++i) {
            ty_btn[i].classList.remove('selected')
            if(i == ty_selected) {
                ty_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#bg"
    })
}

let bg_btn = document.querySelectorAll('.bg')
let bg_selected = -1
for(let index = 0; index < bg_btn.length; ++index) {
    bg_btn[index].addEventListener('click', ()=>{
        bg_selected = index
        for(let i = 0; i < bg_btn.length; ++i) {
            bg_btn[i].classList.remove('selected')
            if(i == bg_selected) {
                bg_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#st"
    })
}


let st_btn = document.querySelectorAll('.st')
let st_selected = -1
for(let index = 0; index < st_btn.length; ++index) {
    st_btn[index].addEventListener('click', ()=>{
        st_selected = index
        for(let i = 0; i < st_btn.length; ++i) {
            st_btn[i].classList.remove('selected')
            if(i == st_selected) {
                st_btn[i].classList.add('selected')
            }
        }
        window.location.href = "#create_btn"
    })
}


function create_() {
    let data = {
        'to': to_selected,
        'ty': ty_selected,
        'st': st_selected
    }
    fetch('/pv', {
        method: "POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(data),
    }).then((_res) => {
        window.location.href = "/pv"
    })
    
}
document.getElementById('create_btn').addEventListener('click', create_)