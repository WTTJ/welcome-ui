import { existsSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

export function generateWebsiteExamplesPages() {
  const dir = join(process.cwd(), "packages");
  const dirExist = existsSync(dir);
  const examples = [] as string[];

  if (!dirExist) return;

  const folderList = readdirSync(dir);

  for (const folder of folderList) {
    const isNewPackage = ["Tag"].includes(folder);
    const subFolder = isNewPackage
      ? join(
          process.cwd(),
          "src",
          "lib",
          "components",
          folder,
          "docs",
          "examples",
        )
      : join(process.cwd(), "packages", folder, "docs", "examples");
    const subFolderExist = existsSync(subFolder);

    if (!subFolderExist) continue;

    const fileList = readdirSync(subFolder);

    for (const file of fileList) {
      examples.push(
        isNewPackage
          ? `${subFolder}/${file}`.split("components")[1]
          : `${subFolder}/${file}`.split("packages")[1],
      );
    }
  }

  const fileContent = `/* eslint-disable */\n/** WARNING\nThis file is auto-generate with yarn watch command, do not change it directly!\n**/\n\nimport dynamic from "next/dynamic";\n\nexport default {\n${examples
    .map(
      (path) =>
        `  "${path}": dynamic(() => ${path.startsWith("/Tag") ? 'import("../../src/lib/components' : 'import("../../packages'}${path}").then(mod => mod), { ssr: false })`,
    )
    .join(",\n")}\n};\n`;

  writeFileSync(
    join(process.cwd(), "website", "build-app", "examples.js"),
    fileContent,
  );
}
