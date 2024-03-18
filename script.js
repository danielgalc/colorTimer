document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const currentTime = new Date();
        const diff = currentTime.getTime() - startTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));

        // Cambiar el color del fondo del body según la fase
        if (hours < 1) {
            document.body.style.backgroundColor = 'red';
        } else if (hours >= 1 && hours < 2) {
            document.body.style.backgroundColor = 'orange';
        } else {
            document.body.style.backgroundColor = 'green';
        }
        
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        const formattedTime = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
        
        timerElement.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }
  
    // Iniciar el contador
    let startTime;
    function startTimer() {
      startTime = new Date();
      setInterval(updateTimer, 1000);
    }
    startTimer();
  });
  

/* 

document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const currentTime = new Date();
        const diff = currentTime.getTime() - startTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));

        // Cambiar el color del fondo del body según la fase
        if (hours < 1) {
            document.body.style.backgroundColor = 'red';
        } else if (hours >= 1 && hours < 2) {
            document.body.style.backgroundColor = 'orange';
        } else {
            document.body.style.backgroundColor = 'green';
        }
        
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        const formattedTime = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
        
        timerElement.textContent = formattedTime;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    const startTime = new Date();
    startTime.setHours(0, 0, 0); // Establecer las horas, minutos y segundos en cero
    setInterval(updateTimer, 1000);
});

*/
