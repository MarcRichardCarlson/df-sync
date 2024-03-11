import { z } from 'zod';

// Define a schema for the text content
export const TextSchema = z.string();

// Function to validate and parse text against the schema
export function validateText(text: string): string {
  return TextSchema.parse(text);
}
