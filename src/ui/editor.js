import * as monaco from 'monaco-editor';
import * as customTypes from './types';
// Since packaging is done by you, you need
// to instruct the editor how you named the
// bundles that contain the web workers.
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return '/public/js/json.worker.bundle.js';
    }
    if (label === 'css') {
      return '/public/js/css.worker.bundle.js';
    }
    if (label === 'html') {
      return '/public/js/html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '/public/js/ts.worker.bundle.js';
    }
    return '/public/js/editor.worker.bundle.js';
  }
}

// validation settings
monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
	noSemanticValidation: true,
	noSyntaxValidation: false
});

// compiler options
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	target: monaco.languages.typescript.ScriptTarget.ES6,
	allowNonTsExtensions: true
});

// extra libraries
monaco.languages.typescript.javascriptDefaults.addExtraLib(customTypes);

let ed = monaco.editor.create(document.getElementById('container'), {
  fontSize: "24px",
  value: `function randomGrid() {
    let x = 16;
    initGrid(x);
    for(var i=0;i<x;i++) {
        for(var j=0;j<x;j++) {
            if(coinFlip(0.66666)) {
                fillCell(i,j);
            }
        }
    }
}

setInterval(randomGrid,100);`,
  language: 'javascript'
});

let decorations = [];

export function colorize(lineNr) {
  ed.revealLine(lineNr);
  decorations = ed.deltaDecorations(decorations,[
    {range: new monaco.Range(lineNr,1,lineNr,9999), options: {inlineClassName:'foo-class'}}
  ]);
}

export function getEditorValue() {
    return monaco.editor.getModels()[0].getValue();
}

export function resetColors() {
  decorations = ed.deltaDecorations(decorations,[]);
}

export var editor = monaco;