var tokens = [
    'H8RR8ldMce', 'RQgeM6437Z', 'USE3sVBI0X', 'yqQ8Qa92c8', 'HyzImkNoJJ',
    'GlJNNb8Mjx', 'BBjrvvHHa1', 'Cvx4aI8Uvh', 'iX4Sqpcy8e', '3W0ben46Ot',
    '6nasAIOkOf', 'NmrloqJTcJ', 'oUw45MgeSh', 'GlWRJZ6CDn', 'ECIV4G6c6l',
    'qMfvvEXU0y', 'wq8YUyNQlk', 'zPc0oqFcKP', 'BTpTlOMyEi', 'TpWATsooMR',
    'E30vFvZP5f', 'Qqu3i2YJBA', 'a7f6Ot3rdL', 'IRHjCG07UG', 'mH7pqNE0o5',
    'wW4FyN4inu', 'qSWo3IwLEu', 'iV1i5kk6Tr', 'bNoqMnwld9', 'bq4i3Pnc3G',
    'X5RanynCka', 'JHUwZvHooQ', 'kTAQskSQkZ', 'oZcUsjBVDS', 'StifRgksTy',
    'G3t0JgIKP8', 'Kk8l3HrNjY', 'bsdHxfAJBZ', 'K0afVdoI83', '4TME9RlXVL',
    'IkVDKWxbrJ', 'pJh9v7wnag', 'MYdBmYSVH8', 'K1nEG0aCq8', 'GC7GO6tJXf',
    'I3FMc4O7ER', 'RYz31DIZi0', 'sfBVmI8HCE', '8jAj6zbdas', 'Q42zzPQpjB',
    '3jVC8zONoH', 'eGTFTanCex', 'LyLxiOCGkk', 'POpck9REQp', '7FZpv7SExm',
    'fRI715j0Ih', 'AEyv3NZf1N', 'lHtxPqQOwy', '34cb0akXK1', 'oLun6iQICb',
    'kHU39xBPlh', 'XAm8qHJZev', 'xTbgEWGaGL', '3wYLVI0yzU', 'LI6pgAipoo',
    'yt83G6vRMd', 'Ubf6mFnksz', '2lgSSiSEfm', 'nSteCFkZES', 'objFQ7xLWS',
    'XSSxoKH3ox', 'Zu0sY5xrnb', 'W1MpiKbgY1', 'e69JHNAhwO', '9Xyv1wHz7d',
    'CsKrVQHr0F', '8dlEUi6RwF', 'G6GD5eWMTZ', 'puNRr4lzKS', 'ANfwLnlfRO',
    'YKFTKupfs6', 'oBHtweOnLp', 'BZcFH7su42', '80Kf9WjihW', 'PkHREssPJX',
    '7Z9WbbPIVS', 'MMTJpHCuUW', 'zLalcLlGeX', 'laAI423RzI', '1Ky3k5GX21',
    'iVtu2qURIN', 'YJcWAfEQ6x', 'G0U9ZUn946', '71NPi8iAaC', 'zmcLJmiqtz',
    'xisdSb0vgu', '98PXTM8sPG', 'x3xG2GfyTm', 'YmwIefFvWR', 'XrUCZ30lgu'
  ];
  
var verfiers = [
    'DDjZ', 'sQuw', 'nOpl', '71U8', 'c0LL', 'SbT1', '8IFW',
    'FjZX', 'Xpw4', 'UomG', 'tbDJ', 'LESV', 'Ol3y', 'phlq',
    'N7qt', 'MdQX', '5gxI', 'iLhs', 'ONU2', 'cT4L', '8lgi',
    '0N9V', '7LgF', '5w6J', '7q7N', 'OGIC', 'R9ie', 'n6Ev',
    'vACq', 'zvNX', '9JDI', 'BKH0', 'BiIC', 'PafN', 'Emmz',
    'x0QI', '6yim', 'kQ5L', '4Zha', 'IWOw', 'gtLi', 'IIrs',
    'J9BY', '7KxI', 'FzVC', 'ZBpV', 'fbfr', 'jF6j', 'ZKbc',
    'IcSm', '4JQx', 'Zs7K', 'JiFM', 'nPuI', 'g1Px', 'OJJn',
    'jYtP', 'W5cU', 'HmZv', '3lL5', '9KWd', 'JZNm', 'ppVD',
    'I3C9', 'xjSJ', 'Hp5b', 'oIp3', 'L3i0', 'oWio', 'Ebe0',
    'NDB7', '9FI2', 'U0pq', '8Lmb', 'eC88', '0h4W', 'nvvr',
    'm3nV', '4WH0', 'Fdcc', 'hePM', 'kujM', 'CIUA', 'lkFP',
    'FDEA', 'v8uP', 'RDI0', 'JTGa', '0ZuS', 'k6DC', 'Dsef',
    'yUHi', 'IwBS', 'lr1C', 'Cawb', 'W17N', 'PvyK', 'j7GG',
    'guKE', 'CRdP'
  ];

const generateToken = (err) => {
    if(err) throw err;
    let random = Math.floor(Math.random()*tokens.length);
    let token = tokens[random];
    let verifier = generateVerifier();
    let result = {
        token:token,
        verifier:verifier
    }
    return result;
}

const verifyToken = (token, err) => {
    if(err) throw err;
    for(let i = 0; i < tokens.length; i++){
        if(token == tokens[i]){
            return true;
        }
    }
}

const generateVerifier = (err) => {
    if(err) throw err;
    let random = Math.floor(Math.random()*verfiers.length);
    let verifier = verfiers[random];
    return verifier;
}

const checkVerifier = (verifier, err) => {
    if(err) throw err;
    for(let i = 0; i < verfiers.length; i++){
        if(verifier == verfiers[i]){
            return true;
        }
    }
}

module.exports = {
    generateToken,
    verifyToken,
    generateVerifier,
    checkVerifier
}