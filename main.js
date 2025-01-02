const progressText = document.getElementById('progressText');
const progressCircleFg = document.querySelector('.progress-circle-fg');

function setProgress(percent) {
    const radius = 90; 
    const circumference = 2 * Math.PI * radius; 
    const offset = circumference - (percent / 100 * circumference); 

    progressCircleFg.style.strokeDashoffset = offset; 
    progressText.textContent = `${percent}%`; 
}

function animateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress <= 100) {
            setProgress(progress);
            progress++;
        } else {
            clearInterval(interval);
        }
    }, 50); 
}


window.onload = animateProgress;