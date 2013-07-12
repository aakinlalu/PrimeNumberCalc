function primesList(nP) {
    var primes = [];
    for( var n = 2;  nP > 0;  n++ ) {
        if( isPrime(n) ) {
            primes.push( n );
            --nP;
        }
    }
    return primes;
}

function isPrime( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i === 0 )
            return false;
    }
    return true;
}

var fs = require('fs');
fs.writeFileSync( 'result.txt', primesList(100) );

