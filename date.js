function date_time() {
    let date=new Date() 
    
    let date_show=document.querySelector(".date")
    date_show.textContent=date
    
}
date_time()
setInterval(date_time,1000)

