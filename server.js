const express = require('express');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const ethers = require('ethers');
const app = express();
const port = 3000;

// Funkce pro generování (bude běžet ve více vláknech)
if (!isMainThread) {
    const { count } = workerData;
    let results = [];
    for (let i = 0; i < count; i++) {
        const entropy = ethers.randomBytes(16);
        const mnemonic = ethers.Mnemonic.fromEntropy(entropy);
        const wallet = ethers.HDNodeWallet.fromPhrase(mnemonic.phrase, "", "m/84'/0'/0'/0/0");
        // Vracíme jen to nejdůležitější pro úsporu RAM
        results.push({ pk: wallet.privateKey, mn: mnemonic.phrase });
    }
    parentPort.postMessage(results);
    return;
}

// API endpoint pro generování
app.get('/api/generate', async (req, res) => {
    const totalCount = parseInt(req.query.count) || 100;
    const coreCount = require('os').cpus().length;
    const countPerWorker = Math.floor(totalCount / coreCount);
    
    let completed = 0;
    let allWallets = [];

    for (let i = 0; i < coreCount; i++) {
        const worker = new Worker(__filename, { workerData: { count: countPerWorker } });
        worker.on('message', (msg) => {
            allWallets = allWallets.concat(msg);
            completed++;
            if (completed === coreCount) {
                res.json(allWallets);
            }
        });
    }
});

app.use(express.static('public'));
app.listen(port, () => console.log(`API Server běží na http://localhost:${port}`));
