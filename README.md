# Test# FORMA

**Thought to Matter. A system where imagination becomes reality.**

FORMA is a minimalist, AI-assisted web platform that allows users to generate 3D-printable objects from natural language prompts. It is designed to serve as an interface between *human intention* and *physical form*, bridging design, emotion, and fabrication.

---

## 🌐 Live Preview

_This repository contains the full source code for FORMA v1 (MVP)._

> Note: STL generation is currently simulated using placeholder models. Integration with real AI APIs (e.g. Meshy.ai or Tripo) is prepared but not live due to API cost constraints.

---

## ✨ Features

- 🔳 Clean React-based interface
- 🧠 Prompt → STL preview pipeline (simulated)
- 🎨 Embedded 3D model viewer (`<model-viewer>`)
- 💾 Download or order printable files
- 🖼️ Public gallery of generated artifacts
- 🛒 Stripe test integration for physical print ordering
- 📦 Supabase integration for prompt storage and gallery curation

---

## 🔧 Stack

| Layer       | Tech                     |
|-------------|--------------------------|
| Frontend    | React + Tailwind CSS     |
| 3D Viewer   | `<model-viewer>` Web Component |
| Backend     | Supabase (auth, DB, storage) |
| Payments    | Stripe (test mode)       |
| Future AI   | Meshy.ai, Tripo.ai (API) |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/forma.git
cd forma
