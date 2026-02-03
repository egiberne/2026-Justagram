import {posts} from './data.js'

const main = document.getElementById('main')
const footer = document.getElementById('footer')

let i 

for(i = 0 ; i< posts.length ; i++){


    console.log(posts[i])

    main.innerHTML += main.innerHTML=`
            <div class="container">
                <div id="profile">
                    
                    
                         <img  id="publisher" class="avatar" src=${posts[i].avatar} alt="A potrait of Vincent Van Gogh.">
                    
                    
                    <div id="identification">
                        <p id="name" class="boldface">${posts[i].name}</p>
                        <address id="location"> ${posts[i].location}</address>
                    </div> 
                      
                </div>
                
                      <img  id="post" src=${posts[i].post} alt="A painted portrait of a man called,${posts[i].name}.">
                
            </div>
    
            <div class="container">
                
                <div id="icons">
                    <img src="images/icon-heart.png" class="icon" alt="A heart, to symbolize, likes.">
                    <img src="images/icon-comment.png" class="icon" alt="A buble to symbolize, comments.">
                    <img src="images/icon-dm.png" class="icon" alt="A rocket airplan to symbolize, direct messages">
                </div>
                
                <p id="likes" class="boldface">${posts[i].likes}</p>
                
                <p id="comments"><span id="username" class="boldface">${posts[i].username} </span>${posts[i].comment}</p>
            </div>
    `
}