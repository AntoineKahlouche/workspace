# Git commit message convention

## TL;DR

Messages must be matched by the following regex :

`/^(REVERT )?(FEAT/FIX/REFACTOR/TEST) (.{1,10})? .{1,100}/`

-   `.{1,10}` : issue reference if FIX
-   `.{1,100}` : description

## Keywords

-   REVERT : cancel a previous commit (the message shoud be the exact same as the reverted commit)

-   FEAT : create a feature (DS or CR)
-   FIX : correct a bug (INC)
-   REFACTOR : update the codebase without impact on fonctionnality
-   TEST : create or update tests

## Semantic release

Git tag, npm version and release on commit message

-   Patch release : FIX, REFACTOR, TEST
-   Minor release : FEAT
-   Major release : triggered manually when all FEAT are included
