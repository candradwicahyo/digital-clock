window.onload = () => {
  
  function digitalClock() {
    let date = new Date();
    
    let hour = setTime(date.getHours());
    let minute = setTime(date.getMinutes());
    let second = setTime(date.getSeconds());
    
    const clock = document.querySelector('.clock');
    
    clock.textContent = `${hour}:${minute}:${second}`;
    setTimeout(digitalClock, 1000);
  }
  
  digitalClock();
  
  function setTime(target) {
    return (target < 10) ? `0${target}` : target;
  }
  
}