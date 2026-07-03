export function stripEnFields<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(stripEnFields) as T;
  }
  if (obj == null || typeof obj !== 'object' || obj instanceof Date) {
    return obj;
  }
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    if (!key.endsWith('_en')) {
      result[key] = stripEnFields(value);
    }
  }
  return result as T;
}
