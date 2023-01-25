# Kubernetes Example
Hello Kubernetes!!!를 출력하는 간단한 Node.js 웹 서버를 만들고 Kubernetes에 배포한다.<p>
<img src="https://github.com/bosornd/k8s-example/raw/v1-hello-kubernetes/images/deployment.png" width=100% />


# minikube (Kubernetes cluster) 시작하기
```
C:\k8s-example> minikube start
```

# docker image 빌드하기
docker 환경을 minikube로 변경한다.
```
C:\k8s-example> minikube docker-env
SET DOCKER_TLS_VERIFY=1
SET DOCKER_HOST=tcp://127.0.0.1:60807
SET DOCKER_CERT_PATH=C:\Users\drajin\.minikube\certs
SET MINIKUBE_ACTIVE_DOCKERD=minikube
REM To point your shell to minikube's docker-daemon, run:
REM @FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i

C:\k8s-example> @FOR /f "tokens=*" %i IN ('minikube -p minikube docker-env --shell cmd') DO @%i
```

docker image를 빌드한다.
```
C:\k8s-example> docker build -t hello-kube:v1 .
```

# 쿠버네티스에 배포하기
```
C:\k8s-example> kubectl apply -f hello-kube-deployment.yaml
```

# 테스트
web-service를 localhost로 터널링 한다. 브라우저로 확인한다.
```
C:\k8s-example> minikube service hello-kube
```
