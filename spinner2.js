let timeout = 100;
const lines = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (let i = 0; i < lines.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${lines[i]}   `);
    if (i === lines.length - 1) console.log();
  }, timeout);

  timeout += 200;
}
