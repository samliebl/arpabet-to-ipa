# arpabet-to-ipa

## Usage

```js
import { arpabetToIpa } from './index.js';

const text = `\
The quick brown fox jumped over the lazy dog.\
`;

const result = arpabetToIpa(text);

console.log(result);
```

### Expected Result

```js
{
  the: {
    cmu: 'DH AH0',
    cmu_no_space: 'DHAH0',
    ipa: 'ð ʌ',
    ipa_no_space: 'ðʌ'
  },
  quick: {
    cmu: 'K W IH1 K',
    cmu_no_space: 'KWIH1K',
    ipa: 'k w ˈɪ k',
    ipa_no_space: 'kwˈɪk'
  },
  brown: {
    cmu: 'B R AW1 N',
    cmu_no_space: 'BRAW1N',
    ipa: 'b ɹ ˈaʊ n',
    ipa_no_space: 'bɹˈaʊn'
  },
  fox: {
    cmu: 'F AA1 K S',
    cmu_no_space: 'FAA1KS',
    ipa: 'f ˈɑ k s',
    ipa_no_space: 'fˈɑks'
  },
  jumped: {
    cmu: 'JH AH1 M P T',
    cmu_no_space: 'JHAH1MPT',
    ipa: 'dʒ ˈʌ m p t',
    ipa_no_space: 'dʒˈʌmpt'
  },
  over: {
    cmu: 'OW1 V ER0',
    cmu_no_space: 'OW1VER0',
    ipa: 'ˈoʊ v ɝ',
    ipa_no_space: 'ˈoʊvɝ'
  },
  lazy: {
    cmu: 'L EY1 Z IY0',
    cmu_no_space: 'LEY1ZIY0',
    ipa: 'l ˈeɪ z i',
    ipa_no_space: 'lˈeɪzi'
  },
  dog: {
    cmu: 'D AO1 G',
    cmu_no_space: 'DAO1G',
    ipa: 'd ˈɔ ɡ',
    ipa_no_space: 'dˈɔɡ'
  }
}
```

## Acknowledgments

CMU Pronouncing Dictionary  
\[[About](http://www.speech.cs.cmu.edu/cgi-bin/cmudict#about)\] 
\[[GitHub](https://github.com/Alexir/CMUdict)\] 
\[[Wikipedia](https://en.wikipedia.org/wiki/ARPABET)\]