import HomeContent from "../../content/HomeContent.mdx";

const content = {
  "/": HomeContent,
};

type ContentProps = {
  path: string;
};

export function Content({ path }: ContentProps) {
  if (Object.prototype.hasOwnProperty.call(content, path)) {
    return <></>;
  }
}
