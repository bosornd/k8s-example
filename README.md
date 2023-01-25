# Kubernetes Example
Redis DB를 master-slave로 구성하고 count를 저장한다.<p>
count를 증가시키는 webInc와 count 값을 전달하는 web 서버를 별도로 구성한다.<p>
Ingress API Gateway를 설정한다.<p>
<img src="https://github.com/bosornd/k8s-example/raw/v4-counter-with-redis/images/deployment.png" width=100% />


# minikube (Kubernetes cluster) 시작하기
```
C:\k8s-example> minikube start
```

ingress를 사용하기 위해서 addon을 활성화 해야 한다.
```
C:\k8s-example> minikube addons enable ingress
```

# Skaffold
Skaffold를 사용해서 빌드와 배포를 자동화 할 수 있다.
```
C:\k8s-example> skaffold run
```

# 테스트
ingress를 localhost로 터널링 한다.
```
C:\k8s-example> minikube tunnel
```

브라우저나 curl로 확인한다.
```
C:\k8s-example> curl localhost/inc
1
C:\k8s-example> curl localhost/inc
2
C:\k8s-example> curl localhost/inc
3
C:\k8s-example> curl localhost
3
C:\k8s-example> curl localhost
3
```
