# Authentication Instructions

## Overview

All authentication in this project is handled exclusively by **Clerk**. No other auth methods, libraries, or custom implementations should be used.

## Rules

### Clerk is the Only Auth Provider

- Use `@clerk/nextjs` for all authentication needs.
- Never implement custom auth, JWT handling, session management, or any other authentication mechanism.
- Never install or use alternative auth libraries (e.g., NextAuth, Auth.js, Lucia, etc.).

### Protected Routes

- `/dashboard` is a protected route — the user **must** be logged in to access it.
- Enforce protection via `proxy.ts` (the project's replacement for middleware) using Clerk's helpers.
- Unauthenticated users attempting to access `/dashboard` must be redirected to the sign-in flow.

### Homepage Redirect

- If a logged-in user visits the homepage (`/`), they must be **redirected to `/dashboard`**.
- Check auth state server-side using Clerk's `auth()` or `currentUser()` in the page component.

### Sign In / Sign Up — Modal Only

- Sign in and sign up flows must always be presented as a **Clerk modal**.
- Never navigate to a dedicated full-page sign-in/sign-up route as the primary flow.
- Use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` from `@clerk/nextjs`.
- The routes under `sign-in/` and `sign-up/` may exist for Clerk's redirect handling, but should not be linked to directly as standalone pages.

## Key Clerk APIs

| Purpose | API |
|---|---|
| Get current user (server) | `auth()` from `@clerk/nextjs/server` |
| Protect a page (server) | `auth().redirectToSignIn()` or check `userId` |
| Sign in button (modal) | `<SignInButton mode="modal">` |
| Sign up button (modal) | `<SignUpButton mode="modal">` |
| Auth state (client) | `useAuth()` hook |
| User info (client) | `useUser()` hook |
