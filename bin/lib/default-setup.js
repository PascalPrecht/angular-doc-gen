var _ = require('lodash');

// Extracting docs from files
var fileReaderFactory = require('../../lib/doc-extractor');
var docExtractors = require('../../lib/doc-extractor/doc-extractors');

// Doc processor plugins
var docProcessorPlugins = require('../../lib/doc-processor/plugins');

// Doc processing
var docParserFactory = require('../../lib/doc-processor');

var docRendererFactory = require('../../lib/doc-renderer');
var customRenderFilters = require('../../lib/doc-renderer/custom-filters');
var customRenderTags = require('../../lib/doc-renderer/custom-tags');

module.exports = {
  readFiles: fileReaderFactory(docExtractors),
  processDocs: docParserFactory(docProcessorPlugins),
  renderDocsFactory: function(templatePath, outputPath) { return docRendererFactory(templatePath, outputPath, customRenderFilters, customRenderTags); }
};