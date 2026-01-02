function isTextFile(filePath: string): boolean {
  const ext = filePath.split(".").pop()?.toLowerCase();
  // Simplified list of common text file extensions
  const textExtensions = [
    "ts",
    "js",
    "json",
    "md",
    "txt",
    "html",
    "css",
    "py",
    "gitignore"
  ];
  return textExtensions.includes(ext || "");
}
