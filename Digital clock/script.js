function updateClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;
  
    const color = getRandomColor();
    const elements = document.querySelectorAll('.shadow');
    elements.forEach(element => {
      element.style.boxShadow = `0 0 10px ${color}`;
      element.style.backgroundColor = color;
    });
  
    if (minutes % 2 === 0) {
      document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.8) 50%, ${darkenColor(color, 20)} 100%)`;
    } else {
      document.body.style.backgroundImage = `linear-gradient(to right, ${darkenColor(color, 20)} 50%, rgba(0, 0, 0, 0.8) 100%)`;
    }
  
    moveClock();
  }
  
  function moveClock() {
    const clock = document.querySelector('.clock');
    const position = getRandomPosition();
    clock.style.top = position.top;
    clock.style.left = position.left;
  }
  
  function getRandomPosition() {
    const positions = [
      { top: '10%', left: '10%' },
      { top: '10%', left: '90%' },
      { top: '90%', left: '10%' },
      { top: '90%', left: '90%' }
    ];
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
  }
  
  // Update the clock and shadow color every second
  setInterval(updateClock, 1000);