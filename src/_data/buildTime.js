module.exports = function () {
  // Runs at build time, reflects the exact moment GitHub Actions last
  // built and deployed this site.
  return new Date().toISOString();
};
