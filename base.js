//handle menu on iOS
window.addEventListener('load', function(){
    var addFocus=function(){
        this.setAttribute('class',this.getAttribute('class')+' focus');
        this.removeEventListener('touchstart', addFocus, false);
        this.addEventListener('touchstart', removeFocus, false);
        }
        
    var removeFocus=function(){
        this.setAttribute('class',this.getAttribute('class').replace(' focus','')) ;
        this.removeEventListener('touchstart', removeFocus, false);
        this.addEventListener('touchstart', addFocus, false);
        
    }    
    document.getElementById('table-of-contents').addEventListener('touchstart', addFocus, false);
});
