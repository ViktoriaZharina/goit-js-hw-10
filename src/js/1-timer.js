import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
let userSelectedDate = 0
let intervalId;
flatpickr(input, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]
        console.log(userSelectedDate);
        const currentDate = Date.now()
        const unixUserSelectedDate = selectedDates[0].getTime()
        if (unixUserSelectedDate < currentDate) {
            startButton.setAttribute("data-start", "")
            startButton.setAttribute("disabled", "")
            iziToast.error({
                    
                    message: 'Please choose a date in the future',
                    position: 'topCenter',
                    backgroundColor: '#EF4040',
                    messageColor: '#FFF',
                    titleColor: '#FFF',
                iconColor: '#FFF',
                timeout: false,
                displayMode: 2,

            });
            
            
        } else {
            startButton.removeAttribute('data-start');
            startButton.removeAttribute('disabled')
            iziToast.destroy();
            return unixUserSelectedDate;
        }
    }
})
const handleClick = () => {
    startButton.setAttribute("data-start", "")
    startButton.setAttribute("disabled", "");
    input.setAttribute("disabled", "")
    const currentDate = Date.now(); 
    const timeDifference = userSelectedDate - currentDate;
    function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

    console.log(convertMs(timeDifference)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
    
    
    function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function updateTimerDisplay(timeObj) {
    const timeUnits = ['days', 'hours', 'minutes', 'seconds'];
    timeUnits.forEach(unit => {
        const element = document.querySelector(`span[data-${unit}]`);
        if (element) {
            const value = addLeadingZero(timeObj[unit]);
            element.textContent = value;
        }
    });
}

function updateTimer() {
    const timeRemaining = userSelectedDate - Date.now();
    if (timeRemaining <= 0) {
        clearInterval(intervalId);
        input.removeAttribute("disabled");
        return;
    }
    const convertedTime = convertMs(timeRemaining);
    updateTimerDisplay(convertedTime);
    
}


updateTimer();

    intervalId = setInterval(updateTimer, 1000);
        

}
startButton.addEventListener("click", handleClick)
    
    