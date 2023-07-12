function factorial(n) {
    if (n < 0)
        throw new Error('n must be positive');

    if (n <= 1)
        return 1;

    let product = 1;
    for (let i = 2; i <= n; i++) {
        product *= i;
    }

    return product;
}

function binomial(n, k) {
    if (k < 0)
      throw new Error(`${k} must be positive`);
    if (k > n)
      throw new Error(`${n} must be >= ${k}`);
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
  
function isBlank(arg) {
    return arg == null;
}
  
function hypergeometric(population, sampleSize, hits, target) {
    if (isBlank(population) || isBlank(sampleSize) || isBlank(hits) || isBlank(target)) {
        throw new Error('One or more args are blank.');
    }

    if (target > sampleSize) {
        throw new Error('Target cannot be larger than the sample size.');
    }
    if (sampleSize > population) {
        throw new Error('Sample size must be smaller than the population.');
    }
    if (hits > population) {
        throw new Error('Successes cannot be larger than the population.');
    }

    const top = (binomial(hits, target) * binomial((population - hits), (sampleSize - target)));
    const bottom = binomial(population, sampleSize);

    return top / bottom;
}

function atLeast(N, n, K, k) {
    let ceiling = n >= K ? K : n;
    let cumulative = 0;

    for (let i = k; i <= ceiling; i++) {
        cumulative += hypergeometric(N, n, K, i);
    }
    return cumulative;
}
  
function none(N, n, K) {
    return hypergeometric(N, n, K, 0);
}

function pretty(n) {
    return `${(n * 100).toPrecision(4)}%`;
}

function calculate() {
    const output = document.getElementById('output');

    const population = Number(document.getElementById('population').value);
    const sample = Number(document.getElementById('sample').value);
    const successes = Number(document.getElementById('successes').value);
    const target = Number(document.getElementById('target').value);

    try {
        const args = [
            population,
            sample,
            successes,
            target
        ];
        // console.log(args);

        const blob = [];
        blob.push(`<p>At least ${target}: <strong>${pretty(atLeast(...args))}</strong></p>`);
        blob.push(`<p>Exactly ${target}: <strong>${pretty(hypergeometric(...args))}</strong></p>`);
        blob.push(`<p>None: <strong>${pretty(none(...args))}</strong></p>`);

        output.innerHTML = blob.join('\n');
        output.hidden = false;
    } catch (err) {
        console.error(err);
        output.innerHTML = `Error: ${err.message}`;
        output.hidden = false;
    }
}

const button = document.getElementById('calc');
button.addEventListener('click', calculate, false);
