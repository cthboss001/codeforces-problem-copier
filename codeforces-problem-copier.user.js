// ==UserScript==
// @name         Codeforces Problem Statement Copier
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Copy full problem statement from Codeforces with one click
// @author       cthboss001
// @match        https://codeforces.com/contest/*/problem/*
// @match        https://codeforces.com/problemset/problem/*/*
// @match        https://codeforces.com/gym/*/problem/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Multiple attempts to ensure page is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        setTimeout(addCopyButton, 500);
        // Backup attempt
        setTimeout(addCopyButton, 1500);
    }

    function addCopyButton() {
        // Try multiple selectors for the title
        let titleDiv = document.querySelector('.problem-statement .title');

        if (!titleDiv) {
            // Alternative selector for problemset pages
            titleDiv = document.querySelector('.title');
        }

        if (!titleDiv) {
            console.log('Codeforces Copier: Title not found');
            return;
        }

        // Check if button already exists
        if (titleDiv.querySelector('.cf-copy-button')) {
            return;
        }

        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'cf-copy-button';
        copyBtn.innerHTML = '📋 Copy Problem';
        copyBtn.style.cssText = `
            margin-left: 15px;
            padding: 5px 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: background-color 0.3s;
            vertical-align: middle;
        `;

        copyBtn.onmouseover = function() {
            this.style.backgroundColor = '#45a049';
        };

        copyBtn.onmouseout = function() {
            this.style.backgroundColor = '#4CAF50';
        };

        copyBtn.onclick = function(e) {
            e.preventDefault();
            copyProblemStatement(this);
        };

        // Add button next to title
        titleDiv.appendChild(copyBtn);
        console.log('Codeforces Copier: Button added successfully');
    }

    function copyProblemStatement(button) {
        let text = '';

        // Get problem title
        const title = document.querySelector('.title');
        if (title) {
            text += title.textContent.trim().replace('📋 Copy Problem', '').trim() + '\n';
        }

        // Get time and memory limits
        const timeLimit = document.querySelector('.time-limit');
        const memoryLimit = document.querySelector('.memory-limit');
        if (timeLimit) text += timeLimit.textContent.trim() + '\n';
        if (memoryLimit) text += memoryLimit.textContent.trim() + '\n';

        // Get all content divs
        const problemStatement = document.querySelector('.problem-statement');
        if (!problemStatement) {
            alert('Problem statement not found!');
            return;
        }

        // Get main problem description
        const problemDescDivs = problemStatement.querySelectorAll('div > p, div > div');
        problemDescDivs.forEach(elem => {
            const txt = elem.textContent.trim();
            if (txt && !txt.includes('Copy Problem') && txt.length > 10) {
                // Avoid duplicates and button text
                if (!text.includes(txt.substring(0, 50))) {
                    text += txt + '\n\n';
                }
            }
        });

        // Get Input section
        const inputSpec = problemStatement.querySelector('.input-specification');
        if (inputSpec) {
            text += '\nInput\n';
            const inputParas = inputSpec.querySelectorAll('p');
            inputParas.forEach(p => {
                text += p.textContent.trim() + '\n';
            });
        }

        // Get Output section
        const outputSpec = problemStatement.querySelector('.output-specification');
        if (outputSpec) {
            text += '\nOutput\n';
            const outputParas = outputSpec.querySelectorAll('p');
            outputParas.forEach(p => {
                text += p.textContent.trim() + '\n';
            });
        }

        // Get Sample tests
        const sampleTests = problemStatement.querySelector('.sample-tests');
        if (sampleTests) {
            text += '\nExample\n';

            const inputDivs = sampleTests.querySelectorAll('.input');
            const outputDivs = sampleTests.querySelectorAll('.output');

            text += 'Input\n';
            inputDivs.forEach(input => {
                const pre = input.querySelector('pre');
                if (pre) {
                    text += pre.textContent.trim() + '\n';
                }
            });

            text += '\nOutput\n';
            outputDivs.forEach(output => {
                const pre = output.querySelector('pre');
                if (pre) {
                    text += pre.textContent.trim() + '\n';
                }
            });
        }

        // Get Note section
        const note = problemStatement.querySelector('.note');
        if (note) {
            text += '\nNote\n';
            const noteParas = note.querySelectorAll('p');
            noteParas.forEach(p => {
                text += p.textContent.trim() + '\n';
            });
        }

        // Clean up the text
        text = text.replace(/\n{3,}/g, '\n\n').trim();

        // Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            // Show success feedback
            const originalText = button.innerHTML;
            const originalColor = button.style.backgroundColor;
            button.innerHTML = '✓ Copied!';
            button.style.backgroundColor = '#2196F3';

            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.backgroundColor = originalColor;
            }, 2000);
        }).catch(err => {
            alert('Failed to copy: ' + err);
        });
    }
})();
