🚀 WebLeadCraft Website
WebLeadCraft is a high-performance, SEO-optimized corporate website built with Next.js 14/15. The project is designed with a strict modular architecture, ensuring code maintainability and a seamless user experience.
✨ Features
App Router & RSC: Leveraging React Server Components for minimal client-side JavaScript.
Modular Architecture: Components are organized into layers (Shared, Entities, Features, Widgets) for better scalability.
Server Actions: Direct server-side processing for lead generation forms with zero API boilerplate.
SEO & Performance: Perfect Lighthouse scores using next/image, next/font, and dynamic metadata.
Responsive Design: A mobile-first approach ensuring a clean UI across all devices.
🛠 Tech Stack
Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Logic: React Server Actions
📂 Modular Structure
The project follows a modified modular pattern located in src/components:
bash
src/
├── app/             # File-based routing & layouts
├── components/      # Architecture layers
│   ├── shared/      # UI Kit (Buttons, Inputs, Spinners)
│   ├── entities/    # Business entities (Service cards, Team members)
│   ├── features/    # User interactions & Server Actions (ContactForm)
│   ├── widgets/     # Composition layers (Header, Hero, Footer)
│   └── pages/       # High-level page compositions
├── lib/             # Core utilities & shared server logic
└── assets/          # Global styles and static files
Используйте код с осторожностью.

🏁 Getting Started
Install dependencies:
bash
npm install
# or
yarn install
Используйте код с осторожностью.

Run the development server:
bash
npm run dev
Используйте код с осторожностью.

View the project:
Open http://localhost:3000 in your browser.
🏗 Deployment
This project is optimized for Vercel. Simply push your code to GitHub and connect the repository for automatic deployments.
