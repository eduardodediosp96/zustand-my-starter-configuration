import path from "path";

// A simple transformer that returns the filename as a mock for the SVG component
const svgTransformer = {
  process(src, filename) {
    const basename = path.basename(filename, ".svg");
    return `module.exports = {
      __esModule: true,
      default: '${basename}'
    };`;
  },
};

export default svgTransformer;
