function toggleSystem() {
    const panel = document.getElementById('data-panel');
    const status = document.getElementById('status-text');

    
    panel.classList.toggle('hidden');

    if (panel.classList.contains('hidden')) {
        status.innerText = "Offline";
        status.style.color = "var(--danger)";
    } else {
        status.innerText = "Online";
        status.style.color = "var(--success)";
    }
}

function updateStress(temp) {
    const title = document.getElementById('main-title');
    
    if (temp > 90) {
        title.classList.add('critical');
    } else {
        title.classList.remove('critical');
    }
}