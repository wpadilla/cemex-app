
export function deepEqual(value1: any, value2: any): boolean {
  return JSON.stringify(value1) === JSON.stringify(value2);
}

export function cleanText(text: string): string {
  return text.toLowerCase().replace(/[ ]/gi, "");
}

export function includeFilter(value1: string = '', value2: string = ''): boolean {
  return cleanText(value1).includes(cleanText(value2));
}


