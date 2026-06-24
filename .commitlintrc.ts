import type { UserConfig } from "@commitlint/types";

/**
 * Use a cast for parserPreset because @commitlint/types' ParserPreset doesn't
 * include the presetConfig option used by conventional-changelog parser.
 */
const config: UserConfig = {
  // cast to satisfy TypeScript while keeping presetConfig for changelog/prompt behavior
  parserPreset: {
    name: "conventional-changelog-conventionalcommits",
    // presetConfig is accepted by the conventional-changelog parser (see package docs)
    parserOpts: {
      types: [
        { section: "Features", type: "feat" },
        { section: "Bug Fixes", type: "fix" },
        { section: "Documentation", type: "docs" },
        { section: "Styles", type: "style" },
        { section: "Code Refactoring", type: "refactor" },
        { section: "Performance Improvements", type: "perf" },
        { section: "Tests", type: "test" },
        { section: "Builds", type: "build" },
        { section: "Continuous Integrations", type: "ci" },
        { hidden: true, section: "Chores", type: "chore" },
        { section: "Reverts", type: "revert" },
        { section: "Dependencies", type: "deps" },
      ],
    },
  },

  prompt: {
    messages: {
      emptyWarning: "can not be empty",
      lowerLimitWarning: "below limit",
      max: "upper %d chars",
      min: "%d chars at least",
      skip: ":skip",
      upperLimitWarning: "over limit",
    },
    questions: {
      body: { description: "Longer description of the change" },
      breaking: { description: "Describe the breaking changes" },
      breakingBody: { description: "Describe the breaking change (body required)" },
      isBreaking: { description: "Are there any breaking changes?" },
      isIssueAffected: { description: "Does this change affect any open issues?" },
      issues: { description: 'Add issue references (e.g. "fix #123")' },
      issuesBody: { description: "If issues are closed, provide a longer description" },
      scope: { description: "Scope of this change (e.g. component or file name)" },
      subject: { description: "Short, imperative description of the change" },
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          build: { description: "Changes to build system or dependencies", emoji: "🛠", title: "Builds" },
          chore: { description: "Other changes that don't touch src or tests", emoji: "♻️", title: "Chores" },
          ci: { description: "CI config and scripts", emoji: "⚙️", title: "Continuous Integrations" },
          deps: { description: "Upgrade/downgrade dependency versions", emoji: "📦", title: "Dependencies" },
          docs: { description: "Documentation only changes", emoji: "📚", title: "Documentation" },
          feat: { description: "A new feature", emoji: "✨", title: "Features" },
          fix: { description: "A bug fix", emoji: "🐛", title: "Bug Fixes" },
          perf: { description: "Performance improvements", emoji: "🚀", title: "Performance Improvements" },
          refactor: { description: "Code change that is not a fix or feature", emoji: "📦", title: "Code Refactoring" },
          revert: { description: "Revert a previous commit", emoji: "🗑", title: "Reverts" },
          style: { description: "Formatting, whitespace, etc (no code changes)", emoji: "💎", title: "Styles" },
          test: { description: "Add or update tests", emoji: "🚨", title: "Tests" },
        },
      },
    },
  },

  rules: {
    // Enforces a blank line before the commit body
    "body-leading-blank": [2, "always"],

    // Enforces a blank line before the footer (e.g. BREAKING CHANGE, refs)
    "footer-leading-blank": [2, "always"],

    // enforce kebab-case if scope in not empty
    "scope-case": [2, "always", "kebab-case"],

    // scope is optional
    "scope-empty": [0],

    // Disallows empty subject → commit message must have a description
    "subject-empty": [2, "never"],

    // Disallows a trailing period in the subject (e.g. "fix: bug." ❌)
    "subject-full-stop": [2, "never", "."],

    // Limits subject length to 72 characters (Git convention)
    "subject-max-length": [2, "always", 72],

    // Restricts allowed commit types to this list
    // Any type outside this list will fail validation
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code style (formatting, no logic changes)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Tests
        "build", // Build system / dependencies
        "ci", // CI configuration
        "chore", // Miscellaneous changes
        "revert", // Reverts a previous commit
        "deps", // Dependency updates
      ],
    ],
  },
};

export default config;
