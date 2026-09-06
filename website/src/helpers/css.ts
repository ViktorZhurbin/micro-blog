export function cx(...classes: Array<string | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
