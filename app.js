let get_started_btn = document.querySelector('.get-started-btn')
let form_container = document.querySelector('.form-container')
let score_board_btn = document.querySelector('.score-board-btn')


get_started_btn.addEventListener('click',(event)=>{
    event.preventDefault()

    get_started_btn.style.display = "none"
    form_container.style.display = "flex"

})

let close_form_container_btn = document.querySelector('.close-form-container-btn')

close_form_container_btn.addEventListener('click',(event)=>{
    event.preventDefault()

    form_container.style.display = "none"
    get_started_btn.style.display = "flex"
})


let file = document.querySelector('#file')
let profile_image = document.querySelector('.profile-image')
let upload_img = ""

file.addEventListener('change',(event)=>{
    event.preventDefault()

    let chosenFile = file.files[0]

    if(chosenFile){
        let reader = new FileReader()

        reader.addEventListener('load',()=>{
            profile_image.src = reader.result;

            upload_img = reader.result;
        })
        reader.readAsDataURL(chosenFile)
    }
})

let signup_form = document.querySelector('.signup-form')
let score_board_container = document.querySelector('.score-board-container')
let balance_value = document.querySelector('.balance-value')

signup_form.addEventListener('submit',(event)=>{
    event.preventDefault()

    let username = document.querySelector('.username').value
    let email = document.querySelector('.email').value
    let phone = document.querySelector('.phone').value
    let balance = document.querySelector('.balance').value

    document.querySelector('.profile-img').src = upload_img
    document.querySelector('.profile-name').innerHTML = username
    balance_value.innerHTML = balance


    if(username.length < 1){
        document.querySelector('.username').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.username').classList.remove('error')
            
        },1000)

    }else if(email.length < 1){
        document.querySelector('.email').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.email').classList.remove('error')
            
        },1000)

    }else if(phone < 1){
        document.querySelector('.phone').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.phone').classList.remove('error')
            
        },1000)
    }else if(balance < 1){
        document.querySelector('.phone').classList.add('error')

        setTimeout(()=>{
            document.querySelector('.phone').classList.remove('error')
            
        },1000)
    }else{
        form_container.style.display = "none"
        score_board_btn.style.display = "flex"

    }
        
})

score_board_btn.addEventListener('click',(event)=>{
    event.preventDefault
    score_board_container.style.display = "flex"
    score_board_btn.style.display = "none"
})

document.querySelector('.close-score-board').addEventListener('click',()=>{
    score_board_btn.style.display = "flex"
    score_board_container.style.display = "none"
})

let game_environment = document.querySelector('.game-environment')

document.querySelector('.profile-bet-btn').addEventListener('click',()=>{

    game_environment.style.display = "flex"
    score_board_btn.style.display = "flex"
    score_board_container.style.display = "none"
})


let play_btn = document.querySelector('.play-btn')





play_btn.addEventListener('click',()=>{
    let amount_played = Number(document.querySelector('.amount-play').value)


    if(amount_played > Number(balance_value.innerHTML)){
        document.querySelector('.amount-play').classList.add('error')
    
        setTimeout(()=>{
            document.querySelector('.amount-play').classList.remove('error')
        },1000)
    }else{
        document.querySelector('.result').style.display = "flex"
        game_environment.style.display = "none"
        score_board_btn.style.display = "flex"

    
        
    
    let net_amount = Number(balance_value.innerHTML) - Number(amount_played)

    balance_value.innerHTML = net_amount


    let lucky_ball_span = document.querySelector('.lucky-balls')
    let player_ball_span = document.querySelector('.player-balls')

    lucky_ball_span.innerHTML = ''
    player_ball_span.innerHTML = ''

    let lucky_random = []
    let player_random = []


    for(let i=0; i<6; i++){
        let lucky_ball = Math.floor(Math.random() * 99) + 1
        if(!lucky_random.includes(lucky_ball)){
            lucky_random.push(lucky_ball)
        }else{
            let lucky_ball = Math.floor(Math.random() * 94) + 6
            lucky_random.push(lucky_ball)
        }


        let player_ball = Math.floor(Math.random() * 99) + 1
        if(!player_random.includes(player_ball)){
            player_random.push(player_ball)
        }else{
            let player_ball = Math.floor(Math.random() * 94) + 6
            player_random.push(player_ball)
        }
    }

    lucky_random.forEach((green_no)=>{
        let span = document.createElement('span')
        span.innerHTML = green_no
        span.classList.add('lucky-ball')

        lucky_ball_span.appendChild(span)
    })

    let counter = 0;

    player_random.forEach((red_no)=>{
        let play = document.createElement('span')
        play.innerHTML = red_no
        if(lucky_random.includes(red_no)){
            play.classList.add('lucky-ball')

            counter++
        }else{
            play.classList.add('ball')
        }
        player_ball_span.appendChild(play)


    })

    document.querySelector('.close-place-bet').addEventListener('click',()=>{
        game_environment.style.display = "none"

    })


    document.querySelector('.close-result').addEventListener('click',()=>{
        document.querySelector('.result').style.display = "none"
        score_board_container.style.display = "flex"


    })

    let total_wins = amount_played * counter

    document.querySelector('.pppp').innerHTML = total_wins

    balance_value.innerHTML = Number(balance_value.innerHTML) + total_wins
    }
    
})























    














