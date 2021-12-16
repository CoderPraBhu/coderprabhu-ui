This repository holds frontend code for https://coderprabhu.com

This Repo for UI: https://github.com/CoderPraBhu/coderprabhu-ui  
Git Repo for API: https://github.com/CoderPraBhu/coderprabhu-api  
Git Repo for K8S: https://github.com/CoderPraBhu/coderprabhu-k8s  

# Commands:  
The app was created using: 
```
npx create-react-app coderprabhu-ui
````
After making any changes, update following command with new version number.
Execute to build the image and push it:  
````
docker build -t gcr.io/all-projects-292200/coderprabhu-ui:v15 .  
docker push gcr.io/all-projects-292200/coderprabhu-ui:v15 
````
You can run the image locally using
````
docker run --rm -p 8080:8080 gcr.io/all-projects-292200/coderprabhu-ui:v15 
curl http://localhost:8080
````
To update the k8s deployment with new version, update the ui deployment yaml with new 
container image version and execute
````
kubectl apply -f k8s/coderprabhu-ui-deployment.yaml  
kubectl apply -f k8s/coderprabhu-ui-backend-service.yaml 
````
coderprabhu-ui-deployment.yaml is hosted on [coderprabhu-k8s](https://github.com/CoderPraBhu/coderprabhu-k8s) repository [here](https://github.com/CoderPraBhu/coderprabhu-k8s/blob/master/coderprabhu-ui-deployment.yaml)  
# Curl commands:   
````
curl http://coderprabhu.com
curl https://coderprabhu.com
curl http://www.coderprabhu.com
curl https://www.coderprabhu.com
curl http://api.coderprabhu.com
curl https://api.coderprabhu.com
````   

kubectl apply -f k8s/coderprabhu-ui-dot-com-cert.yaml
kubectl describe -f k8s/coderprabhu-ui-dot-com-cert.yaml
kubectl delete -f k8s/coderprabhu-ui-dot-com-cert.yaml

kubectl apply -f k8s/coderprabhu-ui-www-dot-com-cert.yaml
kubectl describe -f k8s/coderprabhu-ui-www-dot-com-cert.yaml
kubectl delete -f k8s/coderprabhu-ui-www-dot-com-cert.yaml