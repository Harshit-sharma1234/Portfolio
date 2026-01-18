import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const icons = [
    { url: 'https://raw.githubusercontent.com/rstudio/hex-stickers/main/SVG/shiny.svg', name: 'Shiny.svg' },
    { url: 'https://cdn.simpleicons.org/openai', name: 'OpenAI.svg' }
];

const targetDir = path.join(__dirname, 'public', 'images', 'stack');

icons.forEach(icon => {
    const file = fs.createWriteStream(path.join(targetDir, icon.name));
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(icon.url, options, function (response) {
        if (response.statusCode === 302 || response.statusCode === 301) {
            https.get(response.headers.location, options, function (redirectResponse) {
                redirectResponse.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded ${icon.name} (after redirect)`);
                });
            });
        } else {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${icon.name}`);
            });
        }
    }).on('error', (err) => {
        fs.unlink(path.join(targetDir, icon.name));
        console.error(`Error downloading ${icon.name}: ${err.message}`);
    });
});
