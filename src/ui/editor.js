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

monaco.editor.create(document.getElementById('container'), {
  value: `pixelOn(2,3);
pixelOn(4,5);
pixelOn(0,4);`,
  language: 'javascript'
});

export function getEditorValue() {
    return monaco.editor.getModels()[0].getValue();
}

export var editor = monaco;