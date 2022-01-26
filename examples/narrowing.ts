const padLeft = (padding: number | string, input: string) => {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}


const printElements = (elements: string[] | null) => {
  if (!elements) {
    console.log("Empty");
    return;
  }

  for (const el in elements) {
    console.log(el);
  }
}


