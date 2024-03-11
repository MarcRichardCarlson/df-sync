import { z } from 'zod';

export const LanguageSchema = z.enum(['EN', 'SV']);

export type Language = z.infer<typeof LanguageSchema>;
