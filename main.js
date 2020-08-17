document.getElementById('button').addEventListener('click', function(){
    const searchBar = document.getElementById('Search-here').value;
    if (searchBar == "") {
        console.log('Please write a song name')
        
    }
    else{
    fetch(`https://api.lyrics.ovh/suggest/${searchBar}`)
    .then(res => res.json())
    
    .then(data => {
        
       
      
        
        for (let i = 0; i > -1; i++) {

         for (let i = 0; i < 7; i++) {
             document.getElementsByClassName('single-result')[i].style.display = "block";
             
         }
            
            const title = data.data[i].title;
            document.getElementsByClassName('lyrics-name')[i].innerText = title;
            const author = data.data[i].artist.name;
            document.getElementsByClassName('Author')[i].innerText = author;
            const time = data.data[i].duration;
            const minutes = Math.floor(time / 60);
            
            const seconds = time - minutes * 60;
            if (seconds < 10){
                document.getElementsByClassName('minutes')[i].innerText = minutes + ':' +"0"+ seconds;
            }
            else{
                document.getElementsByClassName('minutes')[i].innerText = minutes + ':' + seconds;
            }
           
            const picture = data.data[i].album.cover;
            document.getElementsByClassName('image')[i].src = picture;
           
            // If you click get lyric button 


                document.getElementsByClassName('get-lyric')[i].addEventListener('click', function () {
                    document.getElementsByClassName('text-success')[0].style.display = "block";
                    fetch(`https://api.lyrics.ovh/v1/${author}/${title}`)
                    .then(res => res.json())
                    .then (data => {
                        
                      
                        document.getElementById('lyric').innerText = data.lyrics;
                        if (data.lyrics == undefined) {
                            document.getElementsByClassName('lyric')[0].innerHTML = "No lyrics found";
                            for (let i = 0; i < 7; i++) {
                                document.getElementsByClassName('single-result')[i].style.display = "none";
                            }
                         } 
                         else{

                         
                        for (let i = 0; i < 7; i++) {
                            document.getElementsByClassName('single-result')[i].style.display = "none";
                            document.getElementsByClassName('form-control')[0].style.display = "none";
                            document.getElementsByClassName('btn')[0].style.display = "none";
                            document.getElementsByClassName('text-center')[0].style.display = "none";
                            
                        }
                    }
                    
                       
                    
                           
                    })
                   
                        })
            
                }
        
                    
           
            
       
                })
        }})
    

