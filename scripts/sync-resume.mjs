import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const resumeFile = 'Sayantan_Rudra_Resume.pdf';
const source = join(process.cwd(), 'app', 'resume', resumeFile);
const destination = join(process.cwd(), 'public', resumeFile);

await mkdir(dirname(destination), { recursive: true });
await copyFile(source, destination);
