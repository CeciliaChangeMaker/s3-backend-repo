module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/CeciliaChangeMaker/s3-backend-repo.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }