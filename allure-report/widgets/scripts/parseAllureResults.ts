import fs from 'fs';
import path from 'path';

const RESULTS_DIR = 'allure-results';
const OUTPUT_DIR = 'dashboard/data';

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(RESULTS_DIR)
  .filter(f => f.endsWith('-result.json'));

const results = files.map(file => {
  const json = JSON.parse(
    fs.readFileSync(path.join(RESULTS_DIR, file), 'utf8')
  );

  return {
    name: json.name,
    status: json.status,
    duration: json.stop && json.start ? json.stop - json.start : 0,
    steps: json.steps || []
  };
});

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'results.json'),
  JSON.stringify(results, null, 2)
);

console.log(`Parsed ${results.length} tests`);
