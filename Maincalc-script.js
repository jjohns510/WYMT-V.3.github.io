document.addEventListener('DOMContentLoaded', function() {
    const storedData = JSON.parse(localStorage.getItem('commissionData'));
    if (storedData) {
        const { role, actuals, goals } = storedData;
        calculateEarnings(role, actuals, goals);
    }
});

function calculateEarnings(role, actuals, goals) {
    const TIC_BREAKDOWN = {
        "Part-Time": { hsd: 140, vid: 93, xmNew: 466, xmUp: 93 },
        "Full-Time": { hsd: 200, vid: 133, xmNew: 666, xmUp: 133 },
        "Lead": { hsd: 212, vid: 141, xmNew: 708, xmUp: 141 }
    };

    let totalEarnings = 0;
    let totalUnitsGoal = 0;
    let totalUnitsActual = 0;

    for (const category in TIC_BREAKDOWN[role]) {
        totalUnitsGoal += goals[category];
        totalUnitsActual += actuals[category];
        totalEarnings += (actuals[category] / goals[category]) * TIC_BREAKDOWN[role][category];
    }

    let allInTicModifier = 1;
    const totalPercentageToGoal = totalUnitsActual / totalUnitsGoal;

    if (totalPercentageToGoal >= 1.20) {
        allInTicModifier = 1.2;
    } else if (totalPercentageToGoal < 0.60) {
        allInTicModifier = 0.25;
    }

    totalEarnings *= allInTicModifier;
    const nrcPayout = actuals.nrc * (actuals.nrc >= goals.nrc ? 0.10 : 0.03);
    totalEarnings += nrcPayout;

    document.getElementById('total-amount').textContent = `$${totalEarnings.toFixed(2)}`;
}
