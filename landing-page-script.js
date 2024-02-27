document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-data').addEventListener('click', function() {
        const role = document.getElementById('position-select').value;
        const actuals = {
            hsd: parseInt(document.getElementById('actual-hsd').value, 10) || 0,
            vid: parseInt(document.getElementById('actual-vid').value, 10) || 0,
            xm: parseInt(document.getElementById('actual-xm').value, 10) || 0,
            upgrade: parseInt(document.getElementById('actual-upgrade').value, 10) || 0,
            nrc: parseInt(document.getElementById('actual-nrc').value, 10) || 0,
        };
        const goals = {
            hsd: parseInt(document.getElementById('goal-hsd').value, 10) || 0,
            vid: parseInt(document.getElementById('goal-vid').value, 10) || 0,
            xm: parseInt(document.getElementById('goal-xm').value, 10) || 0,
            upgrade: parseInt(document.getElementById('goal-upgrade').value, 10) || 0,
            nrc: parseInt(document.getElementById('goal-nrc').value, 10) || 0,
        };

        localStorage.setItem('commissionData', JSON.stringify({ role, actuals, goals }));
        window.location.href = 'Maincalc.html'; // Redirect to the main calculator
    });
});