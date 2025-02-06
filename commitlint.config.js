export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'type-enum': [2, 'always', ['feat', 'fix', 'test', 'style', 'refactor', 'perf', 'build', 'ci', 'docs', 'chore', 'etc']],
  },
};
