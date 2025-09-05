# Oxford Learning Management System (LMS)

A modern, responsive Learning Management System built with Next.js 15, React 19, and Tailwind CSS. This project provides a comprehensive platform for students to manage their courses, assignments, timetable, and academic communications.

## Team Members

- **Ekhlas Abdulmelik** - Frontend Developer
  - Role: Frontend development,  user interface implementation
  - Contributions: Dashboard layout, settings page, forum, timetable, messages, notifications, and other frontend components

- **Eyerusalem Adugnaw** - Frontend Developer  
  - Role: Frontend development,  authentication flow, core page implementation
  - Contributions: Home page, courses pages, assignment pages, authentication pages (sign-in/sign-up/OTP)

- **Kidus Berhane** - Backend Developer
  - Role: Backend development, API design, database management, server-side logic
  - Contributions: Backend architecture, data modeling, API endpoints, authentication system

## Features

### Authentication & Security
- **Sign Up/Sign In**: Clean, accessible forms with email validation and password visibility toggle
- **OTP Verification**: Mock OTP system for email verification during registration
- **Session Management**: Secure logout functionality with localStorage cleanup

### Dashboard
- **Home**: Welcome page with course overview
- **My Courses**: Course catalog with detailed course pages
- **Assignments**: Subject-based assignment management with question lists
- **Timetable**: Weekly schedule display with course times and room information
- **Forum**: Discussion board for student interactions and Q&A
- **Messages**: Internal messaging system for instructor communications
- **Settings**: User preferences and account management
- **Notifications**: Real-time notification dropdown

### UI/UX
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Modern Interface**: Clean, professional design with smooth transitions
- **Sidebar Navigation**: Collapsible sidebar with intuitive menu structure

## Demo Video

[https://drive.google.com/file/d/1pYkS7x2oXhq2dJyfKko0l8uH6rm77KJN/view?usp=sharing]

*Note: Replace VIDEO_ID with your actual YouTube video ID. Upload a screen recording showing:*
- User registration and OTP verification flow
- Dashboard navigation and course management
- Assignment viewing and forum interactions
- Settings and logout functionality

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons (Lucide)
- **Development**: ESLint, Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Backend LMS server running (see Backend Setup below)

### Frontend Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/oxford-lms.git
cd oxford-lms
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```
Edit `.env.local` and update the API URLs to match your backend server.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

This frontend integrates with the backend LMS server. To set up the backend:

1. Clone the backend repository:
```bash
git clone https://github.com/Kidusbk/LMS.git
cd LMS
```

2. Follow the backend setup instructions in the [backend repository](https://github.com/Kidusbk/LMS):
   - Install dependencies: `npm install`
   - Set up PostgreSQL database
   - Configure environment variables
   - Run Prisma migrations: `npx prisma generate && npx prisma migrate dev`
   - Start the backend server: `npm run dev`

3. Ensure the backend is running on `http://localhost:3001` (or update the frontend environment variables accordingly).

### Development Notes

- **Backend Integration**: The frontend now integrates with the [backend LMS server](https://github.com/Kidusbk/LMS) for authentication and data management
- **Authentication**: Real JWT-based authentication with automatic token management
- **API Integration**: Courses, enrollments, and user data are fetched from the backend API
- **Fallback Support**: If the backend is unavailable, the frontend gracefully falls back to static data
- **All forms include proper validation and accessibility features
- The project uses Next.js App Router with TypeScript for type safety

## Project Structure

```
oxford-project/
├── app/
│   ├── (auth)/          # Authentication pages
│   │   ├── signin/      # Sign in page
│   │   ├── signup/      # Sign up page
│   │   └── otp/         # OTP verification
│   ├── (app)/           # Protected dashboard pages
│   │   └── dashboard/   # Main dashboard and sub-pages
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── component/           # Reusable components
├── public/             # Static assets
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the comprehensive icon library