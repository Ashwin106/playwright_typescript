import fs from 'fs';
import path from 'path';

const INPUT_FILE = 'test-results.json';
const OUTPUT_DIR = path.join('dashboard', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'results.json');

console.log('👉 Looking for:', INPUT_FILE);

if (!fs.existsSync(INPUT_FILE)) {
  console.error('❌ test-results.json NOT FOUND');
  process.exit(1);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const raw = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));

const results: { name: string; status: string; duration: number; startTime:string }[] = [];

raw.suites.forEach((fileSuite: any) => {
  fileSuite.suites.forEach((describeSuite: any) => {
    describeSuite.specs.forEach((spec: any) => {
      spec.tests.forEach((test: any) => {
          test.results.forEach((r: any) => {
            
          results.push({
            name: spec.title,
            status: r.status,
            duration: r.duration,
            startTime: r.startTime
          });
        });
      });
    });
  });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

console.log(`✅ results.json CREATED at ${OUTPUT_FILE}`);
