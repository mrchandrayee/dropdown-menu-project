# Dropdown Menu — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/dropdown-menu-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive dropdown menu recreated from the uploaded 6.1-second video.

## Visible source code recovered from the video

The video clearly shows this HTML list-item fragment:

```html
<li class="menu-item">
  <span class="item-icon">
    <i class="bx bxs-dashboard"></i>
  </span>
  <span class="item-txt">dashboard</span>
</li>
```

The CSS panel shows the following `.dropdown-menu` declarations:

```css
.dropdown-menu {
  position: absolute;
  top: 140%;
  left: 0;
  background-color: #1e272e;
  color: #ddd;
  border-radius: 10px;
  padding: 0;
  list-style: none;
  display: none;
  overflow: hidden;
  text-transform: capitalize;
  box-shadow: 10px 10px 10px #747d8c;
}
```

The video also visibly contains a Profile trigger and menu options: Dashboard, Setting, Log Out.

## What was completed for a runnable demo

- Profile button opens/closes the dropdown.
- Click outside or press Escape to close.
- Dashboard, Setting and Log Out show demo feedback.
- Responsive layout and inline SVG icons (no icon library required).
- Accessible expanded state and keyboard dismissal.

## Run locally

No dependencies or build step are required:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Accuracy note

Only the code fragments above are sufficiently legible to transcribe from the video. The rest of the HTML, CSS, and all JavaScript are completed as a functional recreation matching the visible design and behavior. This is not claimed to be the complete original source code.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
