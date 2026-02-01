const express = require('express');
const { Bip39MnemonicGenerator, Bip39SeedGenerator, Bip84, Bip84Coins, Bip39WordsNum, Bip44Changes } = require('bip-utils');
const app = express();
const port = process.env.PORT || 3000;

// API pro hromadné generování
app.get('/api/gen', (req, res) => {
    const count = parseInt(req.query.count) || 100;
    const results = [];

    for (let i = 0; i < count; i++) {
        // 1. Generování mnemoniky (12 slov)
        const mnemonic = Bip39MnemonicGenerator().FromWordsNumber(Bip39WordsNum.WORDS_NUM_12);
        
        // 2. Odvození BIP-84 Root
        const seed = Bip39SeedGenerator(mnemonic).Generate();
        const bip84_ctx = Bip84.FromSeed(seed, Bip84Coins.BITCOIN);
        
        // 3. Odvození první adresy (m/84'/0'/0'/0/0)
        const acc = bip84_ctx.Purpose().Coin().Account(0).Change(Bip44Changes.CHAIN_EXT).AddressIndex(0);
        
        results.push({
            a: acc.PublicKey().ToAddress(),
            m: mnemonic.ToString()
        });
    }
    res.json(results);
});

// Statické HTML rozhraní
app.get('/', (req, res) => {
    res.send(require('fs').readFileSync('./index.html', 'utf8'));
});

app.listen(port, () => console.log(`Server běží na portu ${port}`));
