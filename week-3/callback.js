// Function to simulate fetching user data (asynchronous operation)
function fetchData(callback) {
    setTimeout(() => {
        console.log('Fetching data...');
        const data = { name: 'John Doe', age: 30 };
        callback(null, data);  // First argument is for errors, second is for data
    }, 1000);
}

// Function to simulate processing the fetched data
function processData(data, callback) {
    setTimeout(() => {
        console.log('Processing data...............please wait...............');
        const processedData = { ...data, processed: true };
        callback(null, processedData);
    }, 1000);
}

// Main function to run the sequence
function main() {
    fetchData((err, data) => {
        if (err) {
            return console.error('Error fetching data:', err);
        }
        
        processData(data, (err, processedData) => {
            if (err) {
                return console.error('Error processing data:', err);
            }
            
            console.log('Processed Data:', processedData);
        });
    });
}

// Run the main function
main();
