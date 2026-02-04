import {posts} from './data.js'

const main = document.getElementById('main')
const footer = document.getElementById('footer')
let html =``


for(let post of posts){


    console.log(post)

    main.innerHTML += `
            <div class="container">
                <div id="profile">
                    
                    
                         <img  id="publisher" class="avatar" src=${post.avatar} alt="A potrait of Vincent Van Gogh.">
                    
                    
                    <div id="identification">
                        <p id="name" class="boldface">${post.name}</p>
                        <address id="location"> ${post.location}</address>
                    </div> 
                      
                </div>
                
                      <img  id="post" src=${post.post} alt="A painted portrait of a man called,${post.name}.">
                
            </div>
    
            <div class="container">
                
                <div id="icons">
                    <img src="images/icon-heart.png" class="icon" alt="A heart, to symbolize, likes.">
                    <img src="images/icon-comment.png" class="icon" alt="A buble to symbolize, comments.">
                    <img src="images/icon-dm.png" class="icon" alt="A rocket airplan to symbolize, direct messages">
                </div>
                
                <p id="likes" class="boldface">${post.likes}</p>
                
                <p id="comments"><span id="username" class="boldface">${posts.username} </span>${posts.comment}</p>
            </div>
    `
}

 //main.innerHTML = html