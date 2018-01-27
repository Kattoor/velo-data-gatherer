const veloPoller = require('./velo-poller.js');
const fs = require('fs');

veloPoller.startPolling(60000, data => {
    const date = new Date();
    fs.writeFile(`velo-data-${date.toLocaleDateString() + '-' + date.toLocaleTimeString().replace(/:/g, '-')}`, JSON.stringify(data), () => {})
});
