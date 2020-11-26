var beforeGame = document.getElementById("before");
    
function startGame() {
    var pseudo = document.getElementById('pseudo').value;
        
    var game = document.getElementById("game");
        
        if (pseudo === ""){
            beforeGame.style.display = "block";
        }   else {
            event.preventDefault();
            beforeGame.style.display = "none";
            game.style.display = "block";
            console.log(pseudo);
        }
        
}


var cursor = document.getElementById('cursor');

function jump(){
    var i = 1.3;
    
    window.addEventListener("keypress", function(evt) {
        let y = -75;
        setTimeout(function(){ i = 1.3; }, 900);
        // Le keyCode 32 correspond à la bare espace
        if(evt.keyCode === 32){
            
            let pos = cursor.style.position;
            cursor.animate([
                // keyframes
                { transform: 'translateY('+ pos + 'px)' }, 
                { transform: 'translateY('+ y * i + 'px)' },
                { transform: 'translateY(150px)' }
            ], { 
                // timing options
                duration:900,
                iterations: 1  
            });
              i = i * 2;
            }
        }, false);
        
    }


