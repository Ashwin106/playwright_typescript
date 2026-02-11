import fs from 'fs';
import path from 'path';

const INPUT = 'test-results.json';
const OUTPUT_DIR = 'dashboard/data';
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'results.json');

if (!fs.existsSync(INPUT)) {
  throw new Error('❌ test-results.json not found');
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const raw = JSON.parse(fs.readFileSync(INPUT, 'utf-8'));

const results: { name: string; status: string; duration: number }[] = [];

raw.suites.forEach((fileSuite: any) => {
  fileSuite.suites.forEach((describeSuite: any) => {
    describeSuite.specs.forEach((spec: any) => {
      spec.tests.forEach((test: any) => {
        test.results.forEach((r: any) => {
          results.push({
            name: spec.title,
            status: r.status,
            duration: r.duration
          });
        });
      });
    });
  });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

console.log(`✅ Generated ${results.length} dashboard results`);
