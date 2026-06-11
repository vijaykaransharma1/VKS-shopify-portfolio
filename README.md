# Vijay Karan Sharma - Shopify Developer Portfolio

A premium, interactive, and high-performance developer portfolio built with React and custom CSS. This portfolio showcases skills, work experience, education, projects, and contact information customized for **Vijay Karan Sharma, Shopify Developer & Theme Specialist**.

## 🚀 How to Run the Project

Since this project loads React and Babel directly via CDN, **no local installation (Node.js/npm) is required**. You can run it instantly using either of the methods below:

### Method 1: Direct File Launch (No Setup)
Simply double-click the **`index.html`** file in your workspace folder. It will launch directly in your default web browser using the `file://` protocol. 
> 💡 *Note: The React logic is inline within `index.html` to prevent CORS policy restrictions when loading local scripts directly in the browser.*

### Method 2: Local Web Server (Recommended for Development)
If you prefer to run it through a local HTTP server, choose one of these options:
- **VS Code Live Server**: If using VS Code, install the *Live Server* extension, open the directory, and click **Go Live**.
- **Python**: Run `python -m http.server 8000` in your command line and open `http://localhost:8000` in your browser.
- **Node/npm**: Run `npm run dev` or `npm start` in your command line, which will launch the development server and open the website in your browser automatically.

---

## 🛠️ Technology Stack

- **Core**: React v18 & React DOM v18 (loaded via CDN)
- **Compilation**: Babel Standalone (in-browser JSX transpilation)
- **Styling**: Custom Vanilla CSS featuring glassmorphism, responsive grids, and modern variables
- **Typography**: *Plus Jakarta Sans* via Google Fonts
- **Icons**: FontAwesome v6.4.0 via CDN

---

## 📂 Project Structure

```text
vks/
├── resume/
│   └── vijay-karan-sharma-shopify-developer-09June2026.pdf  # Original Resume PDF
├── assets/
│   └── developer_avatar.png                                 # Profile Headshot
├── index.html                                               # HTML Entrypoint & React App
├── style.css                                                # Custom CSS Design System
├── app.js                                                   # React Logic Reference Copy
└── README.md                                                # Project Documentation (This File)
```

---

## ⚙️ How to Customize

All resume content is loaded from a structured JavaScript object (`RESUME_DATA`) inside the React script block. To change any information:

1. Open **`index.html`** in a text editor (like VS Code or Notepad).
2. Scroll to the `<script type="text/babel">` block.
3. Edit the `RESUME_DATA` object values (e.g., change email, phone number, work history, or add new projects).
4. Save the file and refresh your browser.

### Replacing the Avatar Image
To use your own headshot photo:
1. Save your image inside the `assets/` folder.
2. Rename it to `developer_avatar.png` (or update the `<img src="assets/developer_avatar.png" ...>` source tag inside `index.html`).

---

## ✨ Features Built-In

- **Dark & Light Mode**: Seamless real-time theme transition with custom CSS variables.
- **Skills Filtering Tabs**: Dynamic filtering of competencies (Core Dev, Shopify, Optimization, Marketing) without reloading the page.
- **Timeline Progression**: Clear visual flow of work history spanning multiple organizations.
- **Project Showcase**: Highlights specific technical solutions (such as app replacements, dynamic checkouts, and custom engines).
- **Interactive Contact Form**: Client-side field validations, loader animations, and a success feedback state.
