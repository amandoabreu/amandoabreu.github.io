---
title: How to copy notion tables
description: Someone sent you a table using notion, and you can't copy/paste it? Do this
layout: post
newsletter: false
comments: true
author: Amando Abreu
date: 2023-06-19 12:42:20
---
A﻿ pet peeve of mine is when someone shares a table of some content that I want to save, but it's on notion, and seemingly impossible to copy.

S﻿o I made this javascript file.

O﻿pen up the console and paste away!

Before running the code, make sure the entire table is visible. You might need to scroll all the way to the bottom of the table and click "Load more" a few times.

```javascript
let rowElements = document.querySelectorAll('.notion-selectable.notion-page-block.notion-collection-item');
let rows = [];

rowElements.forEach((rowElement, rowIndex) => {
  // Get top level div elements (direct children of rowElement)
  let cellElements = Array.from(rowElement.children);
  let row = {};

  cellElements.forEach((cellElement, cellIndex) => {
    // Get all nested div elements within the cell
    let nestedDivs = Array.from(cellElement.querySelectorAll('div'));

    // Concatenate the textContent of all nested divs
    let cellText = nestedDivs.map(div => div.textContent.trim()).join(' ');
    
    row[`Cell ${cellIndex + 1}`] = cellText;
  });

  // Only add rows that have at least one cell
  if (Object.keys(row).length > 0) {
    rows.push(row);
  }
});

console.table(rows);
```

T﻿his code will output a table you can copy/paste into excel, csv, etc.