# Task Management Application - Sathvik Kiran (2022bcd0028)

This is a full-stack task management application built with React, Supabase, and designed for Kubernetes deployment.

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions and configurations
│   └── types/         # TypeScript type definitions
├── k8s/               # Kubernetes configuration files (to be added)
└── README.md
```

## Features

- Dashboard with key metrics
- Task management (CRUD operations)
- Responsive design
- User authentication (to be implemented)
- Database integration with Supabase

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment Instructions

### Prerequisites
- Docker
- Kubernetes/Minikube
- kubectl

### Steps for Kubernetes Deployment

1. Build the Docker image:
   ```bash
   docker build -t 2022bcd0028-sathvik-kiran .
   ```

2. Apply Kubernetes configurations:
   ```bash
   kubectl apply -f k8s/
   ```

3. Verify deployment:
   ```bash
   kubectl get pods
   kubectl get services
   ```

## Future Enhancements

1. Implement user authentication
2. Add real-time updates using Supabase subscriptions
3. Implement task filtering and search
4. Add user roles and permissions
5. Integrate with external services

## Technical Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Icons: Lucide React
- Database: Supabase (can be migrated to MySQL for Kubernetes deployment)
- Deployment: Kubernetes/Minikube

## Contact

Sathvik Kiran (2022bcd0028)