# samsa-table

Just a simple collection of scripts that can be run in Node.js to convert Markdown files to CSV, JSON, and vice versa

---

## Guides
### File Assumptions
Markdown
1. The first line of every table are the tables keys
2. The second line is a Markdown indicator for displaying as a table (-|-|-|-)
3. Every other line contains values

CSV
1. Every new line (\n) is a different row
2. The first line are the keys
3. Every other line contains values

---

### Markdown Setup

If the entire Markdown file is a table, there are no "ts" and "te" tags that are needed to identify it. If the table is inline with other elements, surround the table(s) with table tags before conversion

Table Tags
- Table Start: '\%\%ts\%\%'
- Table End: '\%\%te\%\%'

---
