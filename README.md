# Email Address Internationalization

## _IDN-EAI_

An internationalized domain name (IDN) is an Internet domain name that contains at least one label that is displayed in software applications, in whole or in part, in a language-specific script or alphabet, such as Arabic, Chinese, Cyrillic, Devanagari, Hebrew or the Latin alphabet-based characters with diacritics or ligatures, such as French. These writing systems are encoded by computers in multibyte Unicode. Internationalized domain names are stored in the Domain Name System (DNS) as ASCII strings using Punycode transcription.

EAI is the protocol that allows email addresses with IDNs in the domain part and/or Unicode (non-ASCII) characters in the Local part of the Mailbox name. Email software and services need to make specific changes to support EAI, since EAI mail is conceptually a separate mail stream from legacy ASCII mail.

EAI Email Address example : अर्पित@अर्पितराम.भारत

### Installation

You can install the idn-eai module from [NPM](https://registry.npmjs.org/):

    npm install idn-eai

The module is tested on NodeJS v12.18.0

###

Domain Analysis for IDN & ASCII domains.

> The overriding goal for this package is to provide
> API for IDN & EAI related stuffs.

### API Modules

Instructions on how to use them in your own application are linked below.

| Module     | Functions                       |
| ---------- | ------------------------------- |
| idn        | getDomainAnalysisResult(domain) |
| idn        | punycode.toUnicode(domain)      |
| validation | validateHindiWord(word)         |

### Usage & Examples

const eai = require("idn-eai");

- eai.getDomainAnalysisResult("रजिस्ट्री.भारत") will return Analysis of this IDN domain
- eai.punycode.toUnicode("xn--81bg3cc2b2bk5hb.xn--h2brj9c") will return रजिस्ट्री.भारत
- eai.validateHindiWord("भारत का") will return boolean value : true
- eai.validateHindiWord("hello world") will return boolean value : false

### Environment

This code is tested on **NodeJS v12.18.0**

```sh
# node -v
v12.18.0

# npm -v
6.14.8
```

### Developer:

- [Arpit Gupta](https://www.arpitram.com) <gupta.arpit03@gmail.com>
- **www.arpitram.com, www.arpitram.in**

### License

MIT
