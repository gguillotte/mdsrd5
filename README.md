mdsrd5: The Markdown SRD5
=========================

The `mdsrd5.md` file in this repo is **The Markdown SRD5**, converted from the [original System Reference Document 5.0 PDF](http://dnd.wizards.com/articles/features/systems-reference-document-srd) to GitHub Flavored Markdown via Pandoc, some clunky scripting, and a bit of text filtering. This is made possible by the [Open Gaming License](./LICENSING.md). You can view and save a single-page, offline-friendly HTML version at <http://gguillotte.github.io/mdsrd5/>, as well as the same content converted to other formats in this repo.

I've got a few goals for this project:

-   Make a version of the SRD that's accessible. The PDF provided by the first-party publisher is incompatible with many accessibility tools.
-   Make a version of the SRD that's more useful for third-party publishers. The PDF provided by the first-party publisher contains unusable Product Identity references, and the PDF is rendered in such a way that complicates searching and copying content in many PDF readers.
-   Correct punctuation and formatting errors and inconsistencies.
-   Reorganize and divide the SRD so that its modular components can be easily modified for people building new systems on its foundation.
-   Export the content from Markdown to other formats more easily. For instance, exporting to a PDF gives us bookmarks that the first-party version lacks.

What this *won't* be is a complete replacement for the roleplaying game system it references, or a repository for third-party content, or an advertising-supported commercial endeavor. This project is inspired by the stalwart [Hypertext d20 SRD](http://www.d20srd.org/) by Jans Carton.

> **WARNING:** This is a work in progress. Using it as a source for a product covered by the Open Gaming License might expose you to liability. I am not a lawyer, and this is not legal advice; consult a lawyer before using the OGL. Any protected terms in this document not owned by me or that are not Open Game Content or otherwise freely available content are used unintentionally and will be removed immediately on request.

Generic terms
-------------

In several places, protected content must be replaced rather than removed. In these instances, I use the following terms, which I do not claim to own and do not protect as Product Identity:

-   hooked hulk
-   eyestalker
-   fey plane
-   shadow plane
-   Primordial Chaos
-   Orb of the Wyrm

References to protected deities are changed to real-world mythological entities as listed in the Pantheons section, and named NPCs used in examples are given more generic names.

Release notes
-------------

### 0.3 (2016-01-21)

Adds Monster, Creature, and NPC descriptions.

#### New content

-   Descriptions for each monster, miscellaneous creature, and NPC in the SRD. **This SRD's contents should be complete when compared to the original publisher's first release.**

#### Fixes

-   CSS adjustments to font embedding and tables.

#### Known issues

-   The single-page HTML document's length causes problems on some mobile browsers, especially on resource-limited devices. As an alternative, try the epub version, which has the same content and formatting, is styled for vertical page orientations, and is handled better by epub readers than the single-page document by browsers.
-   The document width expands to fit tables on narrow viewports, forcing users to scroll to reach the return-to-top button. 
-   There are no links.
-   Most references to spells and magic items aren't yet properly italicized.
-   Tables are mostly HTML instead of Markdown in this repo, due to the strenuous use of multi-line content in the source material's tables. The Markdown file in this repo is generated from a copy that uses Pandoc's `multiline_tables` extension. Once all content is incorporated and organized, I'll add those source files to this repo.
-   PDF output uses `wktohtml` for now, preventing font embedding and leading to some awkward heading breaks.

### 0.2.1 (2016-01-19)

Adds Monster and NPC sections, but no descriptions.

#### New content

-   The creature ability, monster creation, and monster and NPC advancement rules from the Monster, Legendary Monster, and Nonplayer Character sections.
-   CSS! The entire document is styled, as are the PDF and ePub versions.
-   The TOC at the top of the single-page HTML version is now collapsible, and a return-to-top button floats at the top right corner.

#### Fixes

-   Numerous formatting issues, particularly around incorrect line and paragraph breaks.
-   Overlapping table headings in the PDF are fixed.

#### Known issues (since resolved)

-   Monsters, creatures, and NPCs weren't yet included.
-   Spell descriptions, magic items, and monsters suffered the most in the text conversion process and needed additional proofing.

### 0.2 (2016-01-18)

Adds Magic Items and continues rooting out protected content.

#### New content

-   Magic Items, Magic Item Descriptions, Sentient Magic Items, and Artifacts sections.
-   A citation for the previous System Reference Document, which provides several terms as open content that are not provided or cited by the new System Reference Document.
-   The completed content so far, as a simple, single-page, GitHub Pages-hosted HTML document. The Table of Contents is searchable using [Jets.js](https://jets.js.org), and you can save the document and use it (and the TOC search) offline.
-   An ePub 2 version, only tested in iBooks.

#### Fixes

-   Removed plane-related protected content.
-   Removed protected creature, item, and artifact names. Welcome the hooked hulk and eyestalker!
-   Fixed numerous formatting issues.

#### Known issues (since resolved)

-   PDF output had issues with page-spanning tables.

### 0.1 (2016-01-17)

Initial release, containing all content except the Monsters and Magic Items sections.

#### Fixes

-   Removed proper names of people and places that are protected PI, particularly in the Spell Descriptions section.
-   Generalized references to content not included in the SRD, such as notes directing the reader to omitted class features at the end of a class description.
-   Modified references to books and book chapters to instead refer to sections within the SRD.
-   Un-hyphenated *thunderwave* throughout.
-   Moved all content about objects into a single section.

#### Known issues (since resolved)

-   Magic items weren't yet included.
