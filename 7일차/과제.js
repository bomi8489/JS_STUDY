function openmodal() {
    for(var i=0; i<3; i++){
        const modal = document.getElementById(`modal${i}`)
        modal.style.display = "none"
        if(this.id == `btn${i}`){
            modal.style.display = "flex"
        }
    }
}

function closemodal() {
    for(var i=0; i<3; i++){
        console.log(i)
        const modal = document.getElementById(`modal${i}`)
        modal.style.display = "none"
    }
}

for(var i=0; i<3; i++){
    document.getElementById(`btn${i}`).addEventListener('click', openmodal);
    document.getElementById(`close_btn${i}`).addEventListener('click', closemodal);
}
