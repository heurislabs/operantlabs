# Font Files Required

To complete the Shilia font implementation, you need to add the following font files to this directory:

## Required Files:
1. `Shilia-Thin.woff2` - Modern web font format (recommended)
2. `Shilia-Thin.woff` - Fallback web font format
3. `Shilia-Light.woff2` - Modern web font format (recommended)  
4. `Shilia-Light.woff` - Fallback web font format

## Where to Get Shilia Fonts:
Shilia fonts are commercial fonts created by Mamoun Sakkal. You can purchase them from:
- [Sakkal Design](https://www.sakkal.com/type/shilia.html)
- [MyFonts](https://www.myfonts.com/)
- Other licensed font distributors

## Font Conversion:
If you have the original Shilia font files (.otf or .ttf), you can convert them to web formats using:
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/)
- Command line tools like `fonttools`

## Implementation Status:
✅ CSS @font-face declarations added
✅ Font variables configured
✅ Components updated to use Shilia fonts
⏳ Font files need to be added to this directory

## Font Usage in Code:
- **Shilia Thin**: Used for large headings and emphasis (`font-shilia-thin` class)
- **Shilia Light**: Used for body text and general content (`font-shilia-light` class)

Once you add the font files, the website will automatically use Shilia fonts throughout.
