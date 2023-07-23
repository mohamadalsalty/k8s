# Nodejs-k8s - Kubernetes Deployment Readme

This Readme provides a simple guide to run the "App Name" application using Kubernetes.

## Prerequisites

Before you begin, make sure you have the following installed and configured:

1. Kubernetes cluster - Ensure you have a working Kubernetes cluster and have the `kubectl` command-line tool installed.

2. Application files - Ensure you have the `deployment.yaml` file for the Kubernetes deployment.

## Steps to Run the App

1. **Clone the Repository**

   Clone the repository containing the application files to your local machine.

2. **Navigate to the Directory**

   Open a terminal or command prompt and navigate to the directory where you have the `deployment.yaml` file.

3. **Deploy the Application**

   To deploy the application to your Kubernetes cluster, use the following command:

   ```bash
   kubectl apply -f deployment.yaml

4. **Adding Proxy**

    To add proxy to your localhost, use the following command:  

   ```bash
    kubectl port-forward service/nodejs-service 3000:3000 -n dev
