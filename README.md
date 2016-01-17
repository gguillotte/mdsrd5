mdsrd5: The Markdown SRD5
=========================

The `mdsrd5.md` file in this repo is **The Markdown SRD5**, converted from the [original System Reference Document 5.0 PDF](http://dnd.wizards.com/articles/features/systems-reference-document-srd) to GitHub Flavored Markdown via Pandoc, some clunky scripting, and a bit of text filtering. This is made possible by the [Open Gaming License](http://www.opengamingfoundation.org/ogl.html).

I've got a few goals in doing this:

-   Make a version of the SRD that's accessible. The PDF provided by the first-party publisher is incompatible with many accessibility tools.
-   Make a version of the SRD that's more useful for third-party publishers. The PDF provided by the first-party publisher contains unusable Product Identity references, and the PDF is rendered in such a way that complicates searching and copying content in many PDF readers.
-   Correct punctuation and formatting errors and inconsistencies.
-   Reorganize and divide the SRD so that its modular components can be easily modified for people building new systems on its foundation.
-   Export the content from Markdown to other formats more easily. For instance, exporting to a PDF gives us bookmarks that the first-party version lacks.

What this *won't* be is a complete replacement for the roleplaying game system it references, or a repository for third-party content, or an advertising-supported commercial endeavor. This project is inspired by the stalwart [Hypertext d20 SRD](http://www.d20srd.org/) by Jans Carton.

Release notes
-------------

### 0.1 (2016-01-17)

Initial release, containing all content except the Monsters and Magic Items sections.

#### Fixes

-   Removed proper names of people and places that are protected PI, particularly in the Spell Descriptions section.
-   Generalized references to content not included in the SRD, such as notes directing the reader to omitted class features at the end of a class description.
-   Modified references to books and book chapters to instead refer to sections within the SRD.
-   Un-hyphenated *thunderwave* throughout.
-   Moved all content about objects into a single section.

#### Known issues

-   Monsters and magic items aren't yet included.
-   There are no links. This won't happen until all content is included.
-   Most references to spells and magic items are not yet properly italicized.
-   Tables are mostly HTML instead of Markdown in this repo, due to the strenuous use of tables in the source material. This Markdown file is generated from a copy that uses Pandoc's `multiline_tables` extension.
-   PDF output uses `wktohtml` for now, leading to some poor formatting results, especially with page-spanning tables.
-   Spell descriptions suffered the most in the text conversion process and need another proofing pass.
