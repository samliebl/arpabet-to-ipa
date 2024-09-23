// Import the cmu-pronouncing-dictionary package
import { dictionary } from "cmu-pronouncing-dictionary";

// ARPAbet to IPA mapping
const arpabetToIpaMapping = {
  AA: "ɑ",
  AE: "æ",
  AH: "ʌ",
  AO: "ɔ",
  AW: "aʊ",
  AY: "aɪ",
  B: "b",
  CH: "tʃ",
  D: "d",
  DH: "ð",
  EH: "ɛ",
  ER: "ɝ",
  EY: "eɪ",
  F: "f",
  G: "ɡ",
  HH: "h",
  IH: "ɪ",
  IY: "i",
  JH: "dʒ",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  NG: "ŋ",
  OW: "oʊ",
  OY: "ɔɪ",
  P: "p",
  R: "ɹ",
  S: "s",
  SH: "ʃ",
  T: "t",
  TH: "θ",
  UH: "ʊ",
  UW: "u",
  V: "v",
  W: "w",
  Y: "j",
  Z: "z",
  ZH: "ʒ",
};

/**
 * Converts a CMU phonetic transcription (ARPAbet) to IPA and includes stress markers.
 *
 * @param {string} arpabet - The ARPAbet string to convert.
 * @returns {string} - The corresponding IPA transcription with stress markers.
 */
function arpabetToIPAConverter(arpabet) {
  // Split the ARPAbet string into individual phonemes
  const phonemes = arpabet.split(" ");

  // Map each ARPAbet phoneme to IPA
  const ipaTranscription = phonemes.map((phoneme) => {
    // Extract the stress marker (if it exists) and the phoneme without the stress
    const stressMarker = phoneme.match(/[0-9]/);
    const phonemeWithoutStress = phoneme.replace(/[0-9]/g, "");

    // Get the IPA equivalent of the phoneme
    const ipa = arpabetToIpaMapping[phonemeWithoutStress] || phonemeWithoutStress;

    // Add stress markers in IPA format
    if (stressMarker) {
      if (stressMarker[0] === "1") {
        return `ˈ${ipa}`; // Primary stress
      } else if (stressMarker[0] === "2") {
        return `ˌ${ipa}`; // Secondary stress
      }
    }
    return ipa; // No stress
  });

  // Join the IPA transcription into a single string
  return ipaTranscription.join(" ");
}

/**
 * Analyzes a given text and returns CMU dictionary entries and their IPA equivalent for each word, with stress markers.
 * Also includes versions of the transcriptions with no spaces.
 *
 * @param {string} text - Input text to analyze.
 * @returns {Object} - A map of each word, its CMU entry, and IPA transcription with and without spaces.
 */
export function arpabetToIpa(text) {
  // Remove punctuation and convert text to lowercase
  const cleanText = text.replace(/[^\w\s]/gi, "").toLowerCase();

  // Split text into individual words
  const words = cleanText.split(/\s+/);

  // Create an object to store the CMU entries and IPA for each word
  const wordAnalysis = {};

  // Loop through each word and find its CMU Pronouncing entry
  words.forEach((word) => {
    // Get the CMU dictionary entry for the word
    const cmuEntry = dictionary[word.toLowerCase()];

    // Store the result in the object
    if (cmuEntry) {
      // Convert the ARPAbet entry to IPA, including stress markers
      const ipaTranscription = arpabetToIPAConverter(cmuEntry);

      // Generate the no-space versions of both CMU and IPA
      const cmuNoSpace = cmuEntry.replace(/\s+/g, "");
      const ipaNoSpace = ipaTranscription.replace(/\s+/g, "");

      wordAnalysis[word] = {
        cmu: cmuEntry, // CMU with spaces
        cmu_no_space: cmuNoSpace, // CMU without spaces
        ipa: ipaTranscription, // IPA with spaces
        ipa_no_space: ipaNoSpace, // IPA without spaces
      };
    } else {
      wordAnalysis[word] = "No entry found";
    }
  });

  return wordAnalysis;
}