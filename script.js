function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const display = document.getElementById('display');
        display.value = eval(display.value.replace('÷', '/').replace('×', '*').replace('−', '-'));
        showJumpscare();
    } catch (error) {
        alert('Input tidak valid');
    }
}

function showJumpscare() {
    const jumpscare = document.getElementById('jumpscare');
    jumpscare.style.display = 'flex';
    setTimeout(() => {
        jumpscare.style.display = 'none';
    }, 3000);
}