import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-introduction
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("destination").title("Destinations"),
      S.documentTypeListItem("package").title("Packages"),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId();
        return id && !["destination", "package"].includes(id);
      }),
    ]);
