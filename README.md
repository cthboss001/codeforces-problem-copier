# Codeforces Problem Statement Copier

[![Install Script](https://img.shields.io/badge/Install-Userscript-brightgreen?style=for-the-badge&logo=tampermonkey)](https://github.com/cthboss001/codeforces-problem-copier/raw/main/codeforces-problem-copier.user.js)

A Tampermonkey userscript that adds a convenient copy button to Codeforces problem pages, allowing you to copy the entire problem statement with a single click.

## Features

- One-click copying of complete problem statements
- Automatically formats the copied text with proper sections
- Includes all problem components:
  - Problem title and constraints (time/memory limits)
  - Problem description
  - Input specification
  - Output specification
  - Sample test cases
  - Notes (if available)
- Works across different Codeforces URLs (contests, problemsets, gym)
- Visual feedback on successful copy
- Clean, unobtrusive interface

## Installation

### Prerequisites

You need a userscript manager extension installed in your browser:
- [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge, Opera)
- [Greasemonkey](https://www.greasespot.net/) (Firefox)
- [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

### Install the Script

1. Install one of the userscript managers listed above
2. Click on the raw script file: [codeforces-problem-copier.user.js](codeforces-problem-copier.user.js)
3. Your userscript manager should prompt you to install it
4. Click "Install" or "Confirm Installation"

Alternatively, you can manually create a new userscript in your userscript manager and paste the code.

## Usage

1. Navigate to any Codeforces problem page:
   - Contest problems: `https://codeforces.com/contest/*/problem/*`
   - Problemset: `https://codeforces.com/problemset/problem/*/*`
   - Gym problems: `https://codeforces.com/gym/*/problem/*`

2. Look for the "Copy Problem" button next to the problem title

3. Click the button to copy the entire problem statement to your clipboard

4. The button will show "Copied!" confirmation for 2 seconds

5. Paste the problem statement wherever you need it

## Copied Format

The script copies the problem in the following structured format:

```
[Problem Title]
Time limit: X second(s)
Memory limit: X megabytes

[Problem Description]

Input
[Input specification]

Output
[Output specification]

Example
Input
[Sample inputs]

Output
[Sample outputs]

Note
[Additional notes if present]
```

## Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge, Opera
- **Platforms**: Windows, macOS, Linux
- **Codeforces Pages**: Contest, Problemset, and Gym problems

## Troubleshooting

**Button doesn't appear:**
- Ensure your userscript manager is enabled
- Check that the script is active for Codeforces URLs
- Try refreshing the page
- Check browser console for any errors

**Copy fails:**
- Ensure your browser allows clipboard access
- Some browsers may require explicit permission for clipboard operations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### Version 1.1
- Initial public release
- Added support for multiple Codeforces URL patterns
- Implemented formatted text copying
- Added visual feedback on copy success

## Author

Created for competitive programmers who want to quickly save problem statements for offline practice or documentation.

## Acknowledgments

- Inspired by the needs of the competitive programming community
- Built for use with [Codeforces](https://codeforces.com/)

---

**Note**: This is an unofficial userscript and is not affiliated with or endorsed by Codeforces.
