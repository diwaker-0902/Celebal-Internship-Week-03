const fs = require('fs').promises;

// Function to read a file
async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

// Function to process file content
async function processFileContent(content) {
    try {
        // For this example, let's convert the content to uppercase
        const processedContent = content.toUpperCase();
        return processedContent;
    } catch (err) {
        throw err;
    }
}

// Main function to execute the tasks
async function main() {
    const filePath = 'example.txt';

    try {
        const data = await readFile(filePath);
        const processedContent = await processFileContent(data);
        console.log('Processed Content:', processedContent);
    } catch (err) {
        console.error('Error:', err);
    }
}

// Run the main function
main();
