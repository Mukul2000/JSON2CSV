const converter = require('json-2-csv');
const { readFile, writeFile } = require('../promisify');

async function convert_to_CSV(file_name) {

    const src_file_path = "./uploads/" + file_name;
    const dest_file_path = "./downloads/" + file_name;

    try {

        // Read JSON from file
        const data = await readFile(src_file_path);

        // Parse JSON
        const result = JSON.parse(data);

        // Convert to CSV
        const csv = await converter.json2csvAsync(result)

        // Write to file
        await writeFile(dest_file_path, csv);
    }
    catch (e) {
        throw e;
    }
}

// TODO
function validateJSON(file_path) {
    return true;
}

module.exports = { convert_to_CSV, validateJSON };