# Project Name - URL Shortener with Next.js, Tailwind CSS, and Prisma.js

![Project Logo](https://github.com/hidekinakata/urlshorter/blob/master/projectlogo.png)

## Description

This project is a URL shortener web application built with Next.js 13, Tailwind CSS, and Prisma.js, utilizing a PostgreSQL database. The application allows users to shorten long URLs into easily shareable links. It also provides a separate page to view the number of clicks made on each shortened URL.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs into easily shareable links.
- Track and display the number of clicks for each shortened URL.
- User-friendly web interface built with Next.js and Tailwind CSS.

## Prerequisites

Before running the project, ensure you have the following prerequisites installed:

- Node.js (v14 or higher)
- npm (v7 or higher)
- PostgreSQL database

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/hidekinakata/urlshorter.git
```

2. Navigate to the project directory.

```bash
cd urlshorter
```

3. Install the dependencies.

```bash
npm install
```

## Usage

1. Rename the `.env_example` file to `.env` and update the environment variables as needed.

```bash
cp .env_example .env
```

2. Run the database migrations to create the necessary tables.

```bash
npx prisma migrate dev
```

3. Start the development server.

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Environment Variables

You need to set the following environment variables in the `.env` file:

- `DATABASE_URL`: The connection URL for your PostgreSQL database.
- `NEXT_PUBLIC_SITE_URL`: The url of your domain (in local, `http://localhost:3000`)

## Scripts

The following scripts are available for running various tasks:

- `dev`: Start the development server.
- `build`: Build the production-ready application.
- `start`: Start the production server.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request, describing your changes and the problem they solve.
