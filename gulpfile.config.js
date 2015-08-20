'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './src/';
        this.sourceScripts = this.source + 'scripts/';

        this.tsOutputPath = this.source + '/js';
        this.allJavaScript = [this.sourceScripts + '**/*.js'];
        this.allTypeScript = [this.sourceScripts + '/**/*.ts'];

        this.typings = './tools/typings/';
        this.libraryTypeScriptDefinitions = this.typings + '**/*.d.ts';
        this.appTypeScriptReferences = this.typings + 'app.d.ts';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;