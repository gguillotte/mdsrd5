mdsrd5: The Markdown SRD5
=========================

The `mdsrd5.md` file in this repo is **The Markdown SRD5**, converted from the [original System Reference Document 5.0 PDF](http://dnd.wizards.com/articles/features/systems-reference-document-srd) (copyright 2016 Wizards of the Coast; see LICENSING.md) to GitHub Flavored Markdown via Pandoc, some clunky scripting, and a bit of text filtering. This is made possible by the [Open Gaming License](./LICENSING.md). You can view and save a single-page, offline-friendly HTML version at <http://gguillotte.github.io/mdsrd5/>, as well as the same content converted to other formats in this repo.

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
-   *eldritch beam* (warlock/eldritch invocation)
-   eyestalker (*deck of illusions*)
-   fey plane (planes and monsters)
-   *locate familiar* (warlock pact abilities)
-   maze demon (*maze*)
-   Orb of the Wyrm (artifacts)
-   Primordial Chaos (planes)
-   shadow plane (planes)
-   *spectral guardian* (mummy lord, domains, sacred oaths)
-   *string of insults* (green hag)

References to protected deities are changed to real-world mythological entities as listed in the Pantheons section, and named NPCs used in examples are given more generic names. 

References to protected spells are replaced with spell names from Open Game Content with the same or similar function where such a collision is unavoidable, even if there are no open rules for the spell in this edition. Some of the Open Game Content names used in this manner include:

-   *charm animal* (ranger)
-   *stabilize* (androsphinx)

Release notes
-------------

### 0.4.1 (2016-01-25)

Continued italicizing and linking spells, fixed some formatting issues, and adjusted PDF output.

#### New content

-   The PDF now has narrower margins, a footer, and page numbers.

#### Fixes

-   Added missing links and italics to spells on monsters and creatures, and linked previously italicized spells.
-   Replaced more references to protected plane names from spell descriptions.
-   Replaced a protected demon name in the *maze* spell description.

### 0.4 (2016-01-25)

Added spell links and italicized spells.

#### New content

-   Spells included in the SRD are linked within the markdown source and single-page HTML output. These links appear to work in the epub and PDF versions as well.

#### Fixes

-   The *shatter* spell was missing. This version includes it.
-   Spells and some magic items are italicized.
-   Fixed a typo that existed in the source material.
-   Fixed a table in the Sorcerous Origins section.
-   Replaced a reference to a protected spell in a Sorcerer class example.
-   Replaced references to a protected spell in the Eldritch Invocations section with the made-up spell name *eldritch beam*.
-   Replaced references to a protected spell in the druid NPC's spells and unicorn's innate spellcasting with *guidance*.
-   Replaced a reference to a protected smite spell in the *necklace of prayer beads* with a brief description of its effects.
-   Replaced protected proper names in generic examples for spells and spellcasting.
-   Replaced references to a protected spell in a Ranger class example with a different spell.
-   Replaced references to a protected spell in the *ring of animal influence* and *potion of animal friendship* with *charm animal*, an Open Game Content spell of a similar name and function. Neither spell is documented as Open Game Content for this edition, so the spell is unlinked and statistics aren't provided. The ideal solution is to create or use an open content spell with the same function.

#### Known issues

-   The spells *compulsion* (eldritch invocations), *counterspell* (archmage), *fire bolt* (archmage, mage), *goodberry* (dryad), and *sphere of annihilation* (traps) remain unlinked because rules for them in this system were not released in the reference document and are not Open Game Content. The spells' names remain in this SRD because the terms were declared as Open Game Content elsewhere in this system's reference document or in a previous reference document.
-   The single-page HTML document's length causes problems on some mobile browsers, especially on resource-limited devices. As an alternative, try the epub version, which has the same content and formatting, is styled for vertical page orientations, and is handled better by epub readers than the single-page document by browsers.
-   Tables are mostly HTML instead of Markdown in this repo, due to the strenuous use of multi-line content in the source material's tables. The Markdown file in this repo is generated from a copy that uses Pandoc's `multiline_tables` extension. Once all content is incorporated and organized, I'll add those source files to this repo.
-   PDF output uses `wkhtmltopdf` for now, preventing font embedding and leading to some awkward heading breaks.

### 0.3.2 (2016-01-22)

Reorganized uncategorized monsters to make them more navigable from the Table of Contents. 

#### Fixes

-   Previously, The Markdown SRD5 organized monsters the same way as the original document, which did not designate the end of a group of monsters. (For instance, the ankheg entry is under the Animated Objects heading, even though it isn't an animated object, because there isn't a 3rd-level heading between it and the rug of smothering.) This version moves unorganized monsters to their own section.

#### Known issues (since resolved)

-   There are no links.
-   Most references to spells weren't yet properly italicized.

### 0.3.1 (2016-01-22)

Fixed repetitive creatures.

#### Fixes

-   The list of miscellaneous creatures, generated from individual files for each creature, was rendered twice as a previous version of the compiled file was rendered with them. This release removed this redundant list.

### 0.3 (2016-01-21)

Adds Monster, Creature, and NPC descriptions.

#### New content

-   Descriptions for each monster, miscellaneous creature, and NPC in the SRD. **This SRD's contents should be complete when compared to the original publisher's first release.**

#### Fixes

-   CSS adjustments to font embedding and tables.

#### Known issues (since resolved)

-   Due to a processing issue, the list of miscellaneous creatures was included multiple times.
-   The document width expanded to fit tables on narrow viewports, forcing users to scroll to reach the return-to-top button.

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

Credits and software licenses
-----------------------------

The HTML versions use [Jets.js](https://jets.js.org) ([MIT license](https://opensource.org/licenses/MIT)) by Denis Lukov for TOC search, and [CollapsibleLists.js](http://code.stephenmorley.org/javascript/collapsible-lists/) ([CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/legalcode)) by Stephen Morley. The HTML and ePub versions use the fonts [Alegreya](http://www.fontsquirrel.com/fonts/alegreya) and [Alegreya Sans](http://www.fontsquirrel.com/fonts/alegreya-sans) ([SIL Open Font License v1.10](http://www.fontsquirrel.com/license/alegreya-sans)), copyright 2011 and 2013 by Juan Pablo del Peral. See LICENSING.md and the other licensing files in this repo for details.
