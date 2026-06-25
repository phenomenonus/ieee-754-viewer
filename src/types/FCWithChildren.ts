/**
 * Functional React component type that includes the standard children prop
 */
export type FCWithChildren<P = unknown> = React.FC<React.PropsWithChildren<P>>;
