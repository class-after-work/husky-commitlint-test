export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'test', 'style', 'refactor', 'perf', 'build', 'ci', 'docs', 'chore', 'etc']],
  },
};
