type Props = Record<string, string | number | boolean | null | undefined>;

export const track = (event: string, props?: Props): void => {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, props ?? {});
  }
};
