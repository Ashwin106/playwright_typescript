import fs from 'fs';
import path from 'path';

const INPUT_FILE = 'test-results.json';
const OUTPUT_DIR = path.join('dashboard', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'results.json');

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const raw = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf-8'));

type Step = {
  title: string;
  duration: number;
  status: string;
};

type TestResult = {
  name: string;
  status: string;
  duration: number;
  startTime: string;
  steps: Step[];
};

const results: TestResult[] = [];

raw.suites.forEach((fileSuite: any) => {
  fileSuite.suites.forEach((describeSuite: any) => {
    describeSuite.specs.forEach((spec: any) => {
      spec.tests.forEach((test: any) => {
        test.results.forEach((r: any) => {
          const steps: Step[] = (r.steps || []).map((s: any) => ({
            title: s.title,
            duration: s.duration,
            status: s.error ? 'failed' : 'passed'
          }));

          results.push({
            name: spec.title,
            status: r.status,
            duration: r.duration,
            startTime: r.startTime,
            steps
          });
        });
      });
    });
  });
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

console.log(`✅ results.json created with steps`);
