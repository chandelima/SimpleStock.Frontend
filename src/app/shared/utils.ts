export abstract class Utils {

  static CapitalizeFirstLetter(text: string): string {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);

    return firstLetterCap + remainingLetters;
  }
}
