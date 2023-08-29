 PyArr=['bg--2.jpg','bg-2.jpg','bg-3.jpg','bg-4.jpg','bg-5.jpg','bg-6.jpg','bg-7.jpg']
    i=0
    function fun1(){
       i++
       if(i==7){
        alert("You reached the last image of the gallery")
        alert("Stop clicking Next Image Thank You")

       }
       else{
        document.getElementById('images').src=PyArr[i];
       }
    }
    
    function fun2(){
        i--
        if(i==0){
            alert("you reached the first image of the Gallery")
            alert("Stop clicking Previous Image Thank You")
        }
        else{
        document.getElementById('images').src=PyArr[i];
        }
    }

