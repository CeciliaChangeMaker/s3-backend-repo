module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/t32-g23/s3-backend.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }