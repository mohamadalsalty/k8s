deploying the service
kubectl apply -f namespace.yaml
kubectl apply -f deployment.yaml -n dev
kubectl apply -f replicaset.yaml -n dev
kubectl apply -f service.yaml -n dev
kubectl get all -n dev

