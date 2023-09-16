```
How to use
```

```bash
kubectl create secret generic mysql-pass --from-literal=password=YOUR_ROOT_PASSWORD

kubectl -f ./ -n dev
```


```
How to validate
```

```bash
kubectl run -it --rm --image=mysql:5.7 --restart=Never mysql-client -n dev -- mysql -h 10.244.11.93 -proot
```