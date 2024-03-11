import { z } from 'zod';

export const LanguageItemSchema = z.object({
  label: z.string(),
});

export const LanguageSchema = z.array(LanguageItemSchema);

export interface LanguageItem extends z.infer<typeof LanguageItemSchema> {}

export type Language = z.infer<typeof LanguageSchema>;

export const allLanguageItems = [
  { label: "EN" },
  { label: "SV" },
];

const [EN, SV] = allLanguageItems;
export const initialTabs = [EN, SV];

export function getNextIngredient(
  languageItems: LanguageItem[]
): LanguageItem | undefined {
  const existing = new Set(languageItems);
  return allLanguageItems.find((languageItem) => !existing.has(languageItem));
}
