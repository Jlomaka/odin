module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@typescript-eslint", "react", "react-hooks", "import"],
  rules: {
    "no-console": [1, {allow: ["warn", "error", "info"]}],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "strict": [
      2,
      "safe"
    ],
    "keyword-spacing": [
      2,
      {
        "after": true,
        "before": true
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "quotes": [
      2,
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    // ts, tsx
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/promise-function-async": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-shadow": [
      2
    ],
    "@typescript-eslint/naming-convention": [
      2,
      {
        "selector": "default",
        "format": [
          "snake_case",
          "PascalCase",
          "camelCase"
        ]
      },
      {
        "selector": "interface",
        "prefix": [
          "I"
        ],
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "enum",
        "prefix": [
          "E"
        ],
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "typeAlias",
        "prefix": [
          "T"
        ],
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "class",
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "memberLike",
        "modifiers": [
          "private"
        ],
        "format": [
          "camelCase",
          "PascalCase"
        ],
        "leadingUnderscore": "require"
      },
      {
        "selector": "variable",
        "types": [
          "boolean"
        ],
        "format": [
          "PascalCase"
        ],
        "prefix": [
          "is",
          "should",
          "has",
          "can",
          "did",
          "will",
          "in"
        ]
      }
    ],
    // jsx
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alwaysTryTypes: true
      },
    },
  }
}
