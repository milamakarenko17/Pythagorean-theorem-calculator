function calculatePythagorean() {
    const sideA = parseFloat(document.getElementById('sidea').value);
    const sideB = parseFloat(document.getElementById('sideb').value);
 
    if (isNaN(sidea) || isNaN(sideb)) {
      alert('Kirjuta mõlema külje pikkused');
      return;
    }
 
    const hypotenuse = pythagoreanTheorem(sidea, sideb);
 
    document.getElementById('result').innerText = `C külje pikkus: ${hypotenuse}`;
  }
 
  function pythagoreanTheorem(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }