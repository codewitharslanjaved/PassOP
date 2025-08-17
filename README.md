# 🔐 PassOP — Secure Password Manager

A lightweight **password manager** built with ⚛️ React + ⚡ Vite, offering secure offline storage and a sleek UI.

🌐 **Demo:** [passopweb.vercel.app](https://passopweb.vercel.app)

---

## ✨ Features

* 🔒 **Client‑side encryption** — data stays in-browser.
* 📱 **Responsive UI** powered by React + Vite.
* 🎲 **Password generator** with custom options.
* ➕ **Add / Edit / Delete** entries.
* 📋 **Copy to clipboard** quickly.
* 🌙 **Light & Dark mode** support.

---

## 📸 Preview

![PassOP Web](https://github.com/codewitharslanjaved/PassOP/blob/main/PassOP%20Web%20Preview.png)

---

## 🛠️ Built With

* ⚛️ **React (Vite)** — fast development + optimized builds.
* 🎨 **Tailwind CSS** — responsive styling.
* 📏 **ESLint** — maintain clean code.

---

## 📂 Project Structure

```bash
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.jsx / pages/
│   ├── styles/
│   ├── lib/
│   └── index.jsx
├── .eslintrc.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Development

```bash
# Clone repo
git clone https://github.com/codewitharslanjaved/PassOP.git
cd PassOP

# Install dependencies
npm install  # or yarn install

# Run dev
npm run dev  # or yarn dev

# Build for production
npm run build  # or yarn build
```

For production: `npm run start` (if configured)

---

## 📖 Usage Guide

1. Open the app & set a **Master Password**.
2. Add entries (site, username, password, notes).
3. Generate strong passwords.
4. Copy credentials securely.
6. Toggle theme (Light/Dark).

---

## 🔐 Security & Privacy

* Encryption only in-browser (no data sent to servers).
* Do not store master password or plain backups insecurely.
* Clear clipboard after copying.
* Avoid using on untrusted devices.5. Export/Import (encrypted preferred).

* For sync, use zero‑knowledge encryption.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch `feature/foo`
3. Commit changes + open a PR
4. Add screenshots for UI changes
5. Run lint/format before PR

---

## 🛣️ Roadmap

* Encrypted cloud backup
* Password strength checks & breach detection
* Browser extension for autofill
* Secure TOTP support
* Secure sharing with time‑limited links

---

## 👤 Author

Made with ❤️ by **Arslan Javed** — [GitHub](https://github.com/codewitharslanjaved)
📡 Live demo: [passopweb.vercel.app](https://passopweb.vercel.app)

---

## 📜 License

MIT License — see `LICENSE` file.
