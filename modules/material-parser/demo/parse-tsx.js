const parse = require('../dist').default;

(async () => {
  const options = {
    entry: '/Users/bytedance/Desktop/hyy/code/fork/lowcode-engine/modules/material-parser/demo/component.tsx',
    accesser: 'local',
  };

  const actual = await parse(options);
  console.log(JSON.stringify(actual, null, 2));
})();
