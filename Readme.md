-- Aplly changes     from container
- kubectl rollout restart deployment name_deployment

Kubernetes Types of objects:
Pod: Unit min in Kubernetes. Wrap a container
Deployment: Object that controles a pod
Services: Control of network from Deployment
Types of services

Cluster IP :  Comunication between pods
Node Port: Make a pod accessible from outside the cluster. (Usually only used for dev proposes)
Load Balancer: Make a pod ( or various pods) accessible from outside the cluster. This is right way to expose a pod the outside world.
                Se obtiene un unico puente de entrada a todo el cluster
                Load balancer apuntara a los cluster IP de los deployments
                Load balancer es proveido por el cloud como GCP, aws y es externo al cluster de kubernetes
                Load Balancer envia la peticion al Ingress Controller (esta dentro del cluster) que tiene reglas de enrutamiento para los clusterip/pods
                externo => Load balancer ( PROVEIDO POR GCP, AWS) => (dentro del cluster de kub) Ingress controller => ClusterIP => Deployment(pod)
External Name: Other uses
