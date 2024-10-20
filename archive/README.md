## Created on Aug 8, 2022

# TourneyEz
Streamline scheduling tournaments with your friends

## Table of Contents
- [Demo](#demo)
- [Usage](#usage)
- [Architecture](#architecture)
	- [Coding Standards](#coding-standards)
	- [Bootstrapping Notes](#bootstrapping-notes)
- [Glossary](#glossary)
- [To Do](#to-do)

## Demo
Demo Link: [link]()

## Usage
- Tournament Admins
  - Create/View/Update/Delete tournaments
  - Save magic link (send in group chat or post on website)
- Tournament User
	- Sign up using magic join link
- Anyone
	- View tournament schedule

## Architecture
- Next.js frontend with SSR
- GraphQL Apollo Server
  - JWT Authentication for tournament administrators

### Coding Standards
- Linting - ESLint
- Testing
  - frontend
    - Jest unit tests written per function
    - Optional: Jest and React Testing Library for page
  - backend
    - Jest unit tests written per GraphQL operation

### Bootstrapping Notes
- Client
  - `npx create-next-app client`
  - `npm install @mui/material @emotion/react @emotion/styled` - Material UI 5
  - `npm i @mui/icons-material`
- Server
  - `mkdir server`
  - `npm init -y`
  - `touch .gitignore` [https://github.com/github/gitignore/blob/main/Node.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)
  - `npm i apollo-server graphql`
	- `touch index.js` and add basic code from first-apollo-server app

## Glossary
- Isolated Monorepo - A repository that contains components that are completely isolated to the directory they are contained in (eg. JS frontend and Python backend)
- Shared Monorepo - A repository that contains components that share code or configuration from the root directory (eg. Yarn workspace or Lerna project)

## To Do
- Fix "utils" to be "@/utils" with jsconfig.json changes
- Fix layout
	- create `<main>` element in Layout.js with flexGrow: 1 to fill page
	- have child fill height 100%
	- check each features page
- Add theme.js - DARK MODE
- Add form library. /join should use a form library for validation
- Save form info in localStorage so users don't lose it if they change tabs
- Add favicon
- Save data into database (consider how to use it with Railway.app for deploying)
- Fix deployment to [railway.app](http://railway.app/)  	
- look into multi tenancy
