const fs = require("fs");
const execSync = require('child_process').execSync;

const path = require("path");

module.exports = {
  newProject,
};

const CURR_DIR = process.cwd();
const SKIP_FILES = ['node_modules', '.template.json'];
// https://medium.com/@pongsatt/how-to-build-your-own-project-templates-using-node-cli-c976d3109129
function createDirectoryContents(templatePath, tartgetPath) {
    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
    
        // skip files that should not be copied
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            // read file content and transform it using template engine
            let contents = fs.readFileSync(origFilePath, 'utf8');
            // write file to destination folder
            const writePath = path.join(tartgetPath, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        }
    });
}

async function newProject(projectName) {
  if (fs.existsSync(`./${projectName}`)) {
    console.log(`Project exists. Name: ${projectName}`);
    return;
  }
  try {
    console.log("Create Project:", projectName);
    fs.mkdirSync(projectName);
    fs.mkdirSync(`${projectName}/src`);
    let code;
    let config = {
      cwd: `./${projectName}`, // Set runtime path
      encoding: 'utf8', 
      stdio: 'inherit' // Keep comment output still print on the screen. // https://stackoverflow.com/questions/30134236/use-child-process-execsync-but-keep-output-in-console
    };
    code = execSync(`npm init -y`, config);
    code = execSync(`sed 's/test/${projectName}/g' package.json`, config);
    code = execSync(`npx npm-add-script -k dev -v "webpack --progress --watch --mode=development"`, config);
    code = execSync(`npx npm-add-script -k webpack -v "webpack --mode=development"`, config);
    code = execSync(`npm install -y browser-sync browser-sync-webpack-plugin html-webpack-plugin ts-loader typescript webpack webpack-cli`, config);
    code = execSync(`npm install -y --save-dev mini-css-extract-plugin css-loader sass sass-loader`, config);
  

    let sourcePath = path.join(__dirname, 'templates');
    let tartgetPath = path.join(CURR_DIR, projectName);
    createDirectoryContents(sourcePath, tartgetPath);
    sourcePath = path.join(__dirname, 'src');
    tartgetPath = path.join(CURR_DIR, projectName, 'src');
    createDirectoryContents(sourcePath, tartgetPath);

    code = execSync(`git init`, config);
    code = execSync(`git add .`, config);
    code = execSync(`git commit -m "init project"`, config);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}
