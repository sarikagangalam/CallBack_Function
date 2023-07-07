let timer=10;
let time = document.getElementById('display');


const Display = function() {
setTimeout(() => {
    time.innerHTML = 10;
    setTimeout(() =>{
        time.className = "display";
        time.innerHTML = 9;
        setTimeout(() =>{
            time.className = "display";
            time.innerHTML = 8;
            setTimeout(() =>{
                time.className = "display";
                time.innerHTML = 7;
                setTimeout(() =>{
                    time.className = "display";
                    time.innerHTML = 6;
                    setTimeout(() =>{
                        time.className = "display";
                        time.innerHTML = 5;
                        setTimeout(() =>{
                            time.className = "display";
                            time.innerHTML = 4;
                            setTimeout(() =>{
                                time.className = "display";
                                time.innerHTML = 3;
                                setTimeout(() =>{
                                    time.className = "display";
                                    time.innerHTML = 2;
                                    setTimeout(() =>{
                                        
                                        time.className = "display";
                                        time.innerHTML = 1;
                                        setTimeout(() =>{
                                           time.style.color = "blue";
                                           time.className = "display";
                                            time.innerHTML = "Happy Independence Day!"
                                            
                                  
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000)
};
