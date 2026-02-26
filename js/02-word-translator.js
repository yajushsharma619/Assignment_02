  // Step 1: Get the language code from the user
  let code = prompt("Enter a language code (es, de, en, fr):");


  // Step 2: Use code and display the translation
  if (code === "es") {
    console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (code === "de") {
    console.log("Hello World translated in German is: Hallo Welt");
} else if (code === "fr") {
    console.log("Hello World translated in French is: Bonjour le monde");
} else {
    console.log("Hello World translated in English is: Hello World");
}