import React from "react";

/**
 * TagAttrs<Tag> — intrinsic attributes for Tag (e.g. "div", "a", "input")
 */
export type TagAttrs<Tag extends keyof React.JSX.IntrinsicElements> = React.JSX.IntrinsicElements[Tag];
