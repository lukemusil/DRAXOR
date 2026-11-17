import { isPlaceholder } from "../site.config";

/** Zvýrazní nevyplněný údaj, aby ho šlo na webu hned poznat. */
export function ConfigValue({ value }: { value: string }) {
  if (!isPlaceholder(value)) {
    return <>{value}</>;
  }

  return (
    <span className="inline-block border border-dashed border-[#c59b6d]/70 text-[#ecd7be] rounded px-1.5 py-0.5">
      {value}
    </span>
  );
}
