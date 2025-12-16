function isTextFile(filePath: string): boolean {
  const ext = filePath.split(".").pop()?.toLowerCase();
  const textExtensions = [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "md",
    "txt",
    "html",
    "css",
    "xml",
    "yml",
    "yaml",
    "sql",
    "sh",
    "bash",
    "py",
    "rb",
    "java",
    "c",
    "cpp",
    "h",
    "hpp",
    "go",
    "rs",
    "php",
    "swift",
    "kt",
    "cs",
    "gitignore",
    "env",
    "config",
    "lock"
  ];
  return ext ? textExtensions.includes(ext) : false;
}
