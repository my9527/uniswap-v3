
const fs = require("fs");
const path = require("path");

const lls = ["de-DE", "es-ES", "fr-FR", "id-ID", "ja-JP", "ko-KR", "pt-PT", "ru-RU", "tr-TR", "vi-VN", "zh-CN", "zh-HK"]
const spLocalMap = {
  "zh-CN": "zh-cn",
  "zh-HK": "zh-hk",
}

async function readPO(fname) {
  const fc = fs.readFileSync(path.join(__dirname, "./locales", `${fname}.po`), {
    encoding: 'utf-8'
  });
  console.log("fc", fc);
  return fc;
}


async function readJSON(fname) {
  const fc = require(path.join(__dirname, "../lla", fname + '.json'));
  console.log("fc", fc);
  return fc;
}


async function main(poName) {
  const poContent = await readPO(poName);

  // const poName = "es-ES";
  const localeName =spLocalMap[poName] ? spLocalMap[poName] : poName.split("-")[0];

  const localJSON = await readJSON(localeName);

  let target = poContent;

  const keys = Object.keys(localJSON);

  const _target = keys.reduce((result, cur) => {

    // msgid "Fair Launch"
    const msgId = `msgid "${cur}"`;
    // const msgStr = `msgstr "${cur}"`
    // const msgContent = `msgstr "${cur}"`;
    if(poContent.indexOf(msgId) > -1) {
      // const msgContent = `msgstr "${localJSON[cur]}"`;
      // console.log('replace:', `msgid "${cur}"\nmsgstr ""`, msgContent);
      return result.replace(`msgid "${cur}"\nmsgstr ""`, `msgid "${cur}"\nmsgstr "${localJSON[cur]}"`);
    
    }
    return result;

  }, target);

  // console.log(target);


  // console.log(target)
  // await fs.writeFileSync(path.join(__dirname, "./src/locales", `${poName}.po`), _target, {
  //   encoding: 'utf-8'
  // });
  // console.log(path.join(__dirname, "./locales", `${poName}.po`));

  await fs.writeFileSync(path.join(__dirname, "./locales", `${poName}.po`), _target, {
    encoding: 'utf-8'
  });
  


}


// main();
async function run() {
  for(let i of lls) {
    await main(i);
  }
}

run();


function tt() {
  
}