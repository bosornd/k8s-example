# Kubernetes Example
그림과 같이 3개의 마이크로 서비스로 구성된 시스템을 구현합니다.<p>
<img src="https://github.com/bosornd/k8s-example/raw/main/images/deployment.png" width=75% />
* 상태가 유지될 필요가 없는 web, web-inc 서비스는 deployment로 구현합니다.
  - web 서비스는 현재 count 값을 제공합니다.
  - web-inc 서비스는 count 값을 증가시킵니다.
* 상태가 유지되어야 하는 redis 서비스는 statefulset으로 구현합니다.
  - Redis DB를 master-slave로 구성합니다.
  - DB를 변경해야 하는 명령은 redis-0로 직접 요청하며<br>
  질의는 redis 서비스로 요청해서 부하를 분산시킵니다. &rarr; CQRS 패턴 
* Ingress API Gateway 설정으로 단일 진입점을 구성합니다.

이렇게 서비스를 구분하면 어떤 장점이 있을까요? 단점은?<p>
설명은 [여기에](https://k8s.bosornd.com/kubernetes/kubernetes-and-beyond/)

# 모듈 구조
개발된 소스 코드, 모듈 구조는 그림과 같습니다.<p>
<img src="https://github.com/bosornd/k8s-example/raw/main/images/module.png" width=50% />
* CountDB는 인터페이스 ICountDB를 구현합니다.
* logic.ts는 인터페이스 ICountDB를 사용합니다.
* config.ts는 CountDB의 구현을 설정합니다(Dependency Injection).
* server.ts는 logic.ts를 이용해서 웹 서버를 생성합니다.

다음과 같이 모듈 구조를 바꾸면 어떤 차이가 있을까요?<p>
<img src="https://github.com/bosornd/k8s-example/raw/main/images/module2.png" width=50% /><p>
설명은 [여기에](https://k8s.bosornd.com/kubernetes/kubernetes-and-beyond/)<p>

# minikube (Kubernetes cluster) 시작하기
```
C:\k8s-example> minikube start
```

ingress를 사용하기 위해서 addon을 활성화 해야 합니다.
```
C:\k8s-example> minikube addons enable ingress
```

# Skaffold
Skaffold를 사용해서 빌드와 배포를 자동화 할 수 있습니다.
```
C:\k8s-example> skaffold run
```

# 테스트
ingress를 localhost로 터널링 합니다.
```
C:\k8s-example> minikube tunnel
```

브라우저나 curl로 확인합니다.
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
