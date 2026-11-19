import { visit } from "unist-util-visit";

export function remarkSpoiler() {
  return (tree) => {
    visit(tree, (node) => {
      // 1. Inline spoilers: :spoiler[hidden text]
      if (node.type === "textDirective" && node.name === "spoiler") {
        const data = node.data || (node.data = {});
        data.hName = "span";
        data.hProperties = {
          className: ["spoiler-inline"],
          tabIndex: 0,
          role: "button",
          "aria-label": "Reveal spoiler",
        };
      }

      // 2. Block spoilers: :::spoiler[Optional Title] ... :::
      if (node.type === "containerDirective" && node.name === "spoiler") {
        const data = node.data || (node.data = {});
        data.hName = "details";
        data.hProperties = { className: ["spoiler-block"] };

        // Check if the user provided a custom label like :::spoiler[Plot Twist]
        const labelChild = node.children?.[0];
        const hasLabel = labelChild?.data?.directiveLabel;

        const summaryNode = {
          type: "paragraph",
          data: { hName: "summary" },
          children: hasLabel
            ? labelChild.children
            : [{ type: "text", value: "Spoiler" }],
        };

        if (hasLabel) {
          node.children.shift();
        }
        node.children.unshift(summaryNode);
      }
    });
  };
}
