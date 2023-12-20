async function calculatePythagorean() {
        const sidea = parseFloat(document.getElementById('sidea').value);
        const sideb = parseFloat(document.getElementById('sideb').value);

        const requestBody = {
            sidea,
            sideb
        };

        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

        const stepsDiv = document.getElementById('steps');
        stepsDiv.innerHTML = '';

        if (result.error) {
            resultDiv.innerHTML = `<p>${result.error}</p>`;
        } else {
        if (result.sidec !== undefined) {
            resultDiv.innerHTML = `c külje pikkus ehk hüpotenuus: ${result.sidec.toFixed(2)}`;
        } else if (result.sideb !== undefined) {
            resultDiv.innerHTML = `b külje pikkus: ${result.sideb.toFixed(2)}`;
        } else if (result.sidea !== undefined) {
            resultDiv.innerHTML = `a külje pikkus: ${result.sidea.toFixed(2)}`;
        }

        if (result.steps) {
            stepsDiv.innerHTML = `<p>Calculation Steps:</p>${result.steps.map(step => `<p>${step}</p>`).join('')}`;
            }
        }
        }

app.listen(3000);
console.log('Server started on http://localhost:3000')