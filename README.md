This repository holds code and configurations for https://coderprabhu.com

Git Repo for UI: https://github.com/CoderPraBhu/coderprabhu-ui  
Git Repo for API: https://github.com/CoderPraBhu/coderprabhu-api  
Git Repo for K8S: https://github.com/CoderPraBhu/coderprabhu-k8s  

Commands:  
The app was created using: 
````
npx create-react-app coderprabhu-ui
````
After making any changes, update following command with new version number.
Execute following command to build the image and push it:  
````
docker build -t gcr.io/kubegcp-256806/coderprabhu-ui:v8 .  
docker push gcr.io/kubegcp-256806/coderprabhu-ui:v8  
````
You can run the image locally using
````
docker run --rm -p 8080:8080 gcr.io/kubegcp-256806/coderprabhu-ui:v8  
````
To update the deployment with new version, update the ui deployment with new 
container image version and run
````
kubectl apply -f ../../k8s/coderprabhu-k8s/coderprabhu-ui-deployment.yaml  
````
Curl commands:   
````
curl http://coderprabhu.com
curl https://coderprabhu.com
curl http://www.coderprabhu.com
curl https://www.coderprabhu.com
curl http://api.coderprabhu.com
curl https://api.coderprabhu.com
````   